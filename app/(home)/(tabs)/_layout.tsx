import { View, Text } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';

export default function TabsNavigator() {
  return (
    // <Tabs>
      <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff', // Latar belakang tab bar
          height: 55, // Tinggi tab bar
        },
        tabBarItemStyle: {
          width: 100, // Lebar setiap tab
        },
        tabBarActiveTintColor: '#FFC727', // Warna tab aktif
        tabBarInactiveTintColor: 'gray', // Warna tab tidak aktif
        tabBarLabelStyle: {
          marginTop: 5, // Jarak antara label dan ikon
          fontSize: 12, // Ukuran font label
        },
        tabBarIconStyle: {
          marginBottom: -5, // Menarik ikon lebih dekat ke label
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          headerRight: () => (
            <Link href={'/(home)/users'} asChild>
              <FontAwesome5 name="users" size={22} color="gray" style={{marginHorizontal: 15}} />
            </Link>
          ),
          tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />,
        }}></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={31} color={color} />
          ),
        }}></Tabs.Screen>
    </Tabs>
  );
}
