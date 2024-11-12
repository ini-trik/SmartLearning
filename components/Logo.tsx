import { StyleSheet, Text, View } from 'react-native';

export const Logo = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Text style={styles.logoU}>
        U<Text style={styles.logoTalk}>Talk</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoU: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 32,
    color: '#DDA915',
  },
  logoTalk: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 32,
    color: '#3470A2',
  },
});
