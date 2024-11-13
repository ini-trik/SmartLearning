import { useState } from 'react';
import { View, Text } from 'react-native';
import { Channel, ChannelList, MessageInput, MessageList } from 'stream-chat-expo';

import { router } from 'expo-router';

export default function Main() {
  return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />;
}
