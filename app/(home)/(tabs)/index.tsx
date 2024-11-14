import { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Channel, ChannelAvatar, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';

import { router } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';
import { supabase } from '~/lib/supabase';
import SearcInput from '~/components/SearcInput';

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
          //   router.push(`/channel/${channel.cid}`);
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
