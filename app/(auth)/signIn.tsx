/**
 * Sign in page
 * @author: @fahmousss
 * @version: 1.0.0
 * @since: 2024-11-12
 * @assigned_to : @ini_trik
 * @description : Sign in page
 **/

import { Stack, Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from '~/components/Button';
import { supabase } from '~/lib/supabase';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const [fullName, setFullName] = useState('');
  
  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  // async function signUpWithEmail() {
  //   setLoading(true);
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //     options: {
  //       data: {
  //         full_name: fullName,
  //       },
  //     },
  //   });

  //   if (error) Alert.alert(error.message);

  //   setLoading(false);
  // }
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>
        SIGN IN
        </Text>

        {/* <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Nama"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          autoCapitalize="words"
          keyboardType="default"
        /> */}

        {/* <Text style={styles.label}>Email</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Masukan Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />

      {/* <View style={styles.inputContainer}>
        <Icon name="email" size={24} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View> */}

        {/* <Text style={styles.label}>Password</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Masukan Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          keyboardType="default"
          autoCapitalize="none"
        />

        <Button
          disabled={loading}
          title="Masuk"
          onPress={signInWithEmail}
          style={{
            marginVertical: 16,
          }}
        />
        <Text style={styles.label}>
        Belum Memiliki Akun? daftar{' '}
        <Link href="/signUp" style={styles.link}>
           di sini
        </Link> 
        </Text>     
        {/* <Button disabled={loading} title="Sign Up" onPress={signUpWithEmail} /> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    padding: 26,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginVertical: 40,
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
    marginTop: 12,
  },
  link:{
    color:'#3FA2F6',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  input: {
    width: '100%', 
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: '#fff', 
  },
  button: {
    marginTop: 20, 
  }
});
