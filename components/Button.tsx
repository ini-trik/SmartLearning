import { forwardRef } from 'react';
import { Platform, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <Text
          className={styles.buttonText}
          style={{
            fontFamily: Platform.select({
              ios: 'Outfit_400Regular',
              android: 'Outfit_500Medium',
            }),
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center rounded-lg bg-[#3470A2] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
