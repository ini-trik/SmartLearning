import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

export default function SearcInput() {
  const [searchText, setSearchText] = useState('');

  return (
    <View className="flex flex-row items-center gap-2 px-4 py-2 rounded-full">
      <TextInput
        className="flex-1 text-base bg-transparent"
        placeholder="Search messages..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Ionicons name="search" size={20} color="#3470A2" />
    </View>
  );
}
