import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Login = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Text>Login Screen</Text>
    </View>
  );
};

export default Login;
