import { View, Text, FlatList } from 'react-native';
import React from 'react';
import MessageCard from './MessageCard';
import { dummyChats, dummyUsers } from '../../constant/dummy';

export default function MessageCardList() {
  //Menampilkan list Group Chat dan Chat yang lain
  return (
    <FlatList
      data={dummyChats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MessageCard message={item} />}
    />
  );
}
