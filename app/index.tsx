import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import MessageCardList from '~/components/MessageCard/MessageCardList';
import SearcInput from '~/components/SearcInput';

export default function Home() {
  return (
    <>
      <Container>
        <SearcInput />
        <MessageCardList />
        <Link href="/(auth)/signIn" asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
