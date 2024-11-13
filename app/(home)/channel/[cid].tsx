import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { Channel as ChannelType } from 'stream-chat';
import { MessageInput, useChatContext } from 'stream-chat-expo';
import { MessageList } from 'stream-chat-expo';
import { Channel } from 'stream-chat-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <Channel channel={channel}>
      <MessageList />
      <SafeAreaView edges={['bottom']}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  );
}
