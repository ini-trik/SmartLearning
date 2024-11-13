import { View, Text } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Feather, FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

export default function TabsNavigator() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          headerRight: () => (
            <Link href={'/(home)/users'} asChild>
              <FontAwesome5 name="users" size={22} color="gray" style={{ marginHorizontal: 15 }} />
            </Link>
          ),
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="home" size={size} color={color} />,
        }}></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}></Tabs.Screen>
    </Tabs>
  );
}
