import { createStackNavigator } from '@react-navigation/stack';

import * as Route from '../../utils/route';
import screenOptions from '../screenOptions';
import publicScreens from '../screens/publicScreens';

const Stack = createStackNavigator();

const UnauthNavigator = () => (
  <Stack.Navigator initialRouteName={Route.LOGIN} screenOptions={screenOptions}>
    {publicScreens.map(({ name, component }) => (
      <Stack.Screen name={name} component={component} key={name} />
    ))}
  </Stack.Navigator>
);

export default UnauthNavigator;
