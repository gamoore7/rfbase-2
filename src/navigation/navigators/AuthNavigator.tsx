import {
  // BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Route from '../../utils/route';
import tabScreens from '../screens/tabScreens';
import tabOptions from '../tabOptions';

//========================================================
// =========== DEV NOTES =================================
// You can use one of these and delete the code for the other one
//========================================================
//========================================================

//========================================================
// =========== DEV NOTES =================================
// The code below is for the tab navigator setup. More config will be needed based on project requirements
//========================================================
//========================================================

const Tab = createBottomTabNavigator();

const AuthNavigator = () => (
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

//========================================================
// =========== DEV NOTES =================================
// The code below is for the drawer navigator setup. More config will be needed based on project requirements
//========================================================
//========================================================

// const Drawer = createDrawerNavigator();

// const AuthNavigator = () => (
//   <Drawer.Navigator
//     initialRouteName={Route.HOME_STACK}
//     screenOptions={() => tabOptions}>
//     {tabScreens.map(({ name, component, options }) => (
//       <Drawer.Screen
//         component={component}
//         key={name}
//         name={name}
//         options={options}
//         />
//     ))}
//   </Drawer.Navigator>
// );
export default AuthNavigator;
