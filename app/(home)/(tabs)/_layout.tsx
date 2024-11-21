import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import HeaderRight from '~/components/HeaderRight';

export default function TabsNavigator() {
  const [menuVisible, setMenuVisible] = useState(false); // State untuk menu dropdown

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Toggle visibilitas menu
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff', 
          height: 55, 
        },
        tabBarItemStyle: {
          width: 100, 
        },
        tabBarActiveTintColor: '#FFC727', 
        tabBarInactiveTintColor: 'gray', 
        tabBarLabelStyle: {
          marginTop: 5, 
          fontSize: 12, 
        },
        tabBarIconStyle: {
          marginBottom: -5, 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          headerRight: () => (
            <Link href={'/(home)/users'} asChild>
              <FontAwesome5 name="users" size={22} color="gray" style={{ marginHorizontal: 15 }} />
            </Link>
          ),
          tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />,
        }} />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerRight: () => (
            <HeaderRight />
          ),
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={31} color={color} />
          ),
        }} />
    </Tabs>
  );
}