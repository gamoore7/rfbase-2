import { StackNavigationOptions } from '@react-navigation/stack';
// import { Image, Platform, View } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';

// import { BackArrow } from '../assets/images';
// import { Colors } from '../styles';

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    shadowColor: 'transparent',
    height: 50,
  },
  headerMode: 'screen',
  headerBackTitleVisible: false,
  headerTitle: '',
  headerTransparent: true,
  // TODO: Add back image when needed
  // headerBackImage: () => (
  //   <View
  //     style={{
  //       marginTop: Platform.OS === 'ios' ? 45 : undefined,
  //       width: 50,
  //     }}>
  //     <Image
  //       resizeMode="contain"
  //       resizeMethod="resize"
  //       source={BackArrow}
  //       style={{
  //         alignSelf: 'center',
  //         height: 15,
  //         width: 50,
  //         tintColor: 'white',
  //       }}
  //     />
  //   </View>
  // ),
};

export default screenOptions;
