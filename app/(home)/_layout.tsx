import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';
import ChatProviders from '~/providers/ChatProviders';

const client = StreamChat.getInstance('yjxvdxrxkeub');

export default function HomeLayout() {
  return (
    <ChatProviders>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="channel" options={{ headerShown: false }} />
      </Stack>
    </ChatProviders>
  );
}
