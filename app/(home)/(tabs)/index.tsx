import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { Channel, ChannelAvatar, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';

import { router } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';
import { supabase } from '~/lib/supabase';
import SearcInput from '~/components/SearcInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

function MyCheckbox({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      onPress={() => {
        const newChecked = !checked;
        setChecked(newChecked);
      }}
      className="flex-row items-center gap-2 px-4 py-3 bg-black border-2 border-white rounded-full">
      {checked ? (
        <Ionicons name="checkbox" size={16} color="white" />
      ) : (
        <Ionicons name="square" size={16} color="white" />
      )}
      {children}
    </Pressable>
  );
}
export default function Main() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      let { data: profiles } = await supabase.from('profiles').select('*').neq('id', user?.id); //Exclude current user
      setUsers(profiles);
    };
    fetchUsers();
  }, [user?.id]);

  return (
    <>
      <TextInput
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          console.log(text);
        }}
        autoCapitalize="none"
      />
      <View className="flex-row flex-wrap gap-2 m-5">
        <MyCheckbox>
          <Text
            className="text-white"
            style={{
              fontFamily: 'Outfit_600SemiBold',
            }}>
            Grup
          </Text>
        </MyCheckbox>
      </View>
      <ChannelList
        filters={{
          members: { $in: [user?.id!] },
          ...(search
            ? {
                'member.user.name': { $autocomplete: search },
              }
            : {}),
        }}
        onSelect={async (channel) => {
          router.push(`/channel/${channel.cid}`);
          let sort = { user_id: 'asc' };
          //   console.log(await channel.queryMembers({}, sort, {}));
          console.log(channel.data?.displayName);
        }}
        PreviewAvatar={({ channel }) => <ChannelAvatar channel={channel} />}
      />
    </>
  );
}
// Password chO4XOeEwziSCzix
