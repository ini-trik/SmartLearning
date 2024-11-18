import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import { useChatContext } from 'stream-chat-expo';
import { useAuth } from '~/providers/AuthProvider';
import { router } from 'expo-router';

export default function UserListItems({ user }: { user: any }) {
  const { client } = useChatContext();
  const { user: me } = useAuth();
  const onPress = async () => {
    const channel = client.channel('messaging', {
      members: [me?.id, user.id],
    });
    await channel.watch();
    router.push({ pathname: '/(home)/channel/[cid]', params: { cid: channel.cid } });
  };

  return (
    <Pressable onPress={onPress} className="p-4 bg-white">
      <View className="flex-row items-center gap-2">
        <Image
          source={{ uri: user.avatar_url ? user.avatar_url : 'https://via.placeholder.com/150' }}
          className="w-10 h-10 rounded-full"
        />
        <Text className="text-lg text-gray-800" style={styles.fontBold}>
          {user.full_name ? user.full_name : 'Anonymous'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fontBold: {
    fontFamily: 'Outfit_700Bold',
  },
  fontRegular: {
    fontFamily: 'Outfit_400Regular',
  },
});
