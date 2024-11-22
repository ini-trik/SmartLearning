import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function ChannelLayout() {
  return (
    <Stack>
      <Stack.Screen name="[cid]" />
      <Stack.Screen name="info" options={{
        title:"Deskripsi"
      }} />
    </Stack>
  );
}
