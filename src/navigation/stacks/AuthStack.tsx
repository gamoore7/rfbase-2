import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Route from '../../utils/route';
import tabScreens from '../screens/tabScreens';
import tabOptions from '../tabOptions';

const AuthStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={Route.HOME_STACK}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      // TODO: Use tabBar prop if we add a custom tab bar depending on project
      //tabBar={(props: BottomTabBarProps) => <YourTabBarComponent {...props} />}
      screenOptions={() => tabOptions}>
      {tabScreens.map(({ name, component, options }) => (
        <Tab.Screen
          component={component}
          key={name}
          name={name}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AuthStack;
