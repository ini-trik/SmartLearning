import { View, Text, Pressable, StyleSheet, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useAuth } from '~/providers/AuthProvider';
import { supabase } from '~/lib/supabase';
import UserListItems from '~/components/UserListItems';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '~/components/Button';
import { Input } from '@rneui/themed';
import SearcInput from '~/components/SearcInput';
import { Container } from '~/components/Container';
import { router } from 'expo-router';
import { useChatContext } from 'stream-chat-expo';

function MyCheckbox({
  children,
  userId,
  setUserMembers,
}: {
  children: React.ReactNode;
  userId: string;
  setUserMembers: (userId: string, checked: boolean) => void;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      onPress={() => {
        const newChecked = !checked;
        setChecked(newChecked);
        setUserMembers(userId, newChecked);
      }}
      className="flex-row items-center gap-2">
      {checked && <Ionicons name="checkmark" size={20} color="black" />}
      {children}
    </Pressable>
  );
}

export default function GroupScreen() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const { client } = useChatContext();
  const [groupName, setGroupName] = useState('');
  const [userMembers, setUserMembers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      let { data: profiles } = await supabase.from('profiles').select('*').neq('id', user?.id); //Exclude current user
      setUsers(profiles);
    };
    fetchUsers();
  }, [user?.id]); //

  const onPress = async () => {
    const channel = client.channel('messaging', {
      name: groupName,
      members: [user?.id, ...userMembers],
    });
    await channel.watch();
    router.push({ pathname: '/(home)/channel/[cid]', params: { cid: channel.cid } });
  };
  return (
    <Container>
      <View>
        <Text
          className="mt-3 mb-1 text-lg"
          style={{
            fontFamily: 'Outfit_500Medium',
          }}>
          Group name
        </Text>

        <TextInput
          className="mb-3 mt-2 rounded-lg border border-[#ccc] p-3 focus:border-[#000]"
          placeholder="Enter group name"
          value={groupName}
          onChangeText={(text) => setGroupName(text)}
          autoCapitalize="none"
        />
      </View>
      <Text className="mt-4 mb-3 text-md" style={{ fontFamily: 'Outfit_500Medium' }}>
        Select users to invite to the group
      </Text>
      <FlatList
        data={users}
        contentContainerClassName="gap-4"
        renderItem={({ item }) => (
          <MyCheckbox
            userId={item.id}
            setUserMembers={(userId, checked) => {
              setUserMembers((prev) =>
                checked ? [...prev, userId] : prev.filter((id) => id !== userId)
              );
            }}>
            <Image
              source={{
                uri: item.avatar_url ? item.avatar_url : 'https://via.placeholder.com/150',
              }}
              className="w-10 h-10 rounded-full"
            />
            <Text style={{ fontFamily: 'Outfit_400Regular' }}>{item.full_name ?? 'Anonymous'}</Text>
          </MyCheckbox>
        )}
      />
      <Button title="Create group" onPress={onPress} />
    </Container>
  );
}
