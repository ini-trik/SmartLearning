import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Channel, ChannelAvatar, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';

import { router } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';
import { supabase } from '~/lib/supabase';

export default function Main() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      let { data: profiles } = await supabase.from('profiles').select('*').neq('id', user?.id); //Exclude current user
      setUsers(profiles);
    };
    fetchUsers();
  }, [user?.id]);

  return (
    <ChannelList
      filters={{ members: { $in: user?.id ? [user.id] : [] } }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      PreviewAvatar={({ channel }) => <ChannelAvatar channel={channel} />}
    />
  );
}
// Password chO4XOeEwziSCzix
