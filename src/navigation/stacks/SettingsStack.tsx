import { createStackNavigator } from '@react-navigation/stack';

import * as Route from '../../utils/route';
import screenOptions from '../screenOptions';
import authScreens from '../screens/authScreens';

const Stack = createStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator initialRouteName={Route.SETTINGS}>
    {authScreens.map(({ name, component: Component, options }) => (
      <Stack.Screen
        name={name}
        key={name}
        options={{
          ...screenOptions,
          ...(options || {}),
        }}>
        {props => <Component {...props} />}
      </Stack.Screen>
    ))}
  </Stack.Navigator>
);

export default SettingsStack;
