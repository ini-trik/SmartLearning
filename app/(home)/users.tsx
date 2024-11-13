import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { supabase } from '~/lib/supabase';
import { useAuth } from '~/providers/AuthProvider';
import UserListItems from '~/components/UserListItems';

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
    <FlatList
      data={users}
      contentContainerClassName="gap-3"
      renderItem={({ item }) => <UserListItems user={item} />}
    />
  );
}
