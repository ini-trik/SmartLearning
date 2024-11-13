import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function UserListItems({ user }: { user: any }) {
  return (
    <View className="p-4 bg-white">
      <View className="flex-row items-center gap-2">
        <Image
          source={{ uri: user.avatar_url ? user.avatar_url : 'https://via.placeholder.com/150' }}
          className="w-10 h-10 rounded-full"
        />
        <Text className="text-lg text-gray-800" style={styles.fontBold}>
          {user.full_name ? user.full_name : 'Anonymous'}
        </Text>
      </View>
    </View>
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
