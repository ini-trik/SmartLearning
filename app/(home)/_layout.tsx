import { Redirect, Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';
import { useAuth } from '~/providers/AuthProvider';
import ChatProviders from '~/providers/ChatProviders';

export default function HomeLayout() {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href="/(auth)/signIn" />;
  }
  return (
    <ChatProviders>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="channel" options={{ headerShown: false }} />
      </Stack>
    </ChatProviders>
  );
}
