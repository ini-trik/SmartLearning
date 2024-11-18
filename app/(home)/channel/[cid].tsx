import { router, Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { Channel as ChannelType } from 'stream-chat';
import { MessageInput, useChatContext } from 'stream-chat-expo';
import { MessageList } from 'stream-chat-expo';
import { Channel } from 'stream-chat-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

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
              <FontAwesome5
                name="trash"
                size={24}
                color="red"
                onPress={async () => {
                  await channel.delete();
                  router.push('/(home)');
                }}
              />
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
