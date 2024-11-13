import { useState } from 'react';
import { View, Text } from 'react-native';
import { Channel, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';

import { router } from 'expo-router';
import { useAuth } from '~/providers/AuthProvider';

export default function Main() {
  const { user } = useAuth();
  return (
    <ChannelList
      filters={{ members: { $in: user?.id ? [user.id] : [] } }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}
// Password chO4XOeEwziSCzix
