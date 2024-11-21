import { router, Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Channel as ChannelType } from 'stream-chat';
import { MessageInput, useChatContext } from 'stream-chat-expo';
import { MessageList } from 'stream-chat-expo';
import { Channel } from 'stream-chat-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import HeaderRight from '~/components/HeaderRight';

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { cid } = useLocalSearchParams<{ cid: string }>();
  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({ cid });
      setChannel(channels[0]);
    };
    fetchChannel();
  }, [cid]);
  if (!channel) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: channel.data?.name ? channel.data.name : 'Chat',
          headerBackTitleVisible: false,
          headerRight: () => {
            return (
              <HeaderRight>

                <TouchableOpacity
                  style={styles.menuItem}
                  className=' gap-1 flex flex-row'>
                  <Ionicons
                    name="information-circle"
                    size={20}
                  />
                  <Text>Info grup</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                  await channel.delete();
                  router.push('/(home)');
                }}
                  style={styles.menuItem}
                  className=' gap-1 flex flex-row'>
                  <Ionicons
                    name="trash"
                    color={'red'}
                    size={20}
                  />
                  <Text className='text-red-400'>Delete</Text>
                </TouchableOpacity>

              </HeaderRight>
            );
          },
        }}
      />
      <Channel channel={channel}>
        <MessageList
          TypingIndicator={() => {
            return <Text>Typing...</Text>;
          }}
        />
        <SafeAreaView edges={['bottom']}>
          <MessageInput />
        </SafeAreaView>
      </Channel>
    </>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    padding: 8,
    alignItems: 'center',
  },
})