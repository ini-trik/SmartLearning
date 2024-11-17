import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { View, Text, Image, StyleSheet } from 'react-native';
import MessageCardList from '~/components/MessageCard/MessageCardList';
import SearcInput from '~/components/SearcInput';

export default function Home() {
  return (
    <>
      <Container>
        <Image 
          source={require('../assets/welcome.png' )}
          style={styles.welcomeImage}
          resizeMode="contain"
        />

        <Text style={styles.welcomeText}>Selamat Datang Di <Text style={styles.logoU}>
            U</Text><Text style={styles.logoTalk}>
              Talk</Text></Text>

        <Text style={styles.descText}>Jelajahi, temukan, dan tetap terhubung dengan orang-orang favorit Anda. Selamat menikmati percakapan di <Text style={styles.logoU}>
            U</Text><Text style={styles.logoTalk}>
              Talk</Text>!</Text>

        <Link href="/signIn" asChild>
          <Button style={styles.button} title="Masuk Sekarang"/>
        </Link>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  descText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555', 
    marginBottom: 40,
    lineHeight: 24, 
  },
  welcomeImage: {
    // marginTop: 18,
    // marginBottom: 10,
    marginVertical: 15,
    width: '100%',
    height: 400,
  },
  logoU: {
    fontFamily: 'Outfit_700Bold',
    color: '#DDA915',
  },
  logoTalk: {
    fontFamily: 'Outfit_700Bold',
    color: '#3470A2',
  },
  button: {
    marginTop: 20, 
  }
});
