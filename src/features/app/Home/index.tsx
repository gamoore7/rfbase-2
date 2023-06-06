import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useGetHolidayByCountryCodeQuery } from '../../../api/posts/postsSlice';

const Home = () => {
  const insets = useSafeAreaInsets();
  const { data } = useGetHolidayByCountryCodeQuery('US');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Text>{data?.[0]?.name}</Text>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
