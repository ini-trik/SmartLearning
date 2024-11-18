import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { supabase } from '~/lib/supabase';
import { useAuth } from '~/providers/AuthProvider';
import UserListItems from '~/components/UserListItems';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      let { data: profiles } = await supabase.from('profiles').select('*').neq('id', user?.id); //Exclude current user
      setUsers(profiles);
    };
    fetchUsers();
  }, [user?.id]); // Add user?.id as dependency since we use it in the effect

  return (
    <>
      <TouchableOpacity
        onPress={() => router.push('/(home)/group')}
        className="flex-row items-center gap-2 p-4 mb-3 bg-white rounded-lg">
        <FontAwesome5 name="users" size={22} color="black" />
        <Text style={{ fontFamily: 'Outfit_700Bold' }}>Create a group</Text>
      </TouchableOpacity>
      <FlatList data={users} renderItem={({ item }) => <UserListItems user={item} />} />
    </>
  );
}
