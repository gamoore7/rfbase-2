/* eslint-disable max-len */
import 'react-native-gesture-handler';
import { useRef, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar } from 'react-native';

import AuthStack from './stacks/AuthStack';
import UnauthStack from './stacks/UnauthStack';
import { navigationRef } from '../utils/RootNavigation';
import * as Route from '../utils/route';

const Stack = createStackNavigator();

const Navigation = () => {
  const routeNameRef = useRef('');

  const [previousRouteName, setPreviousRouteName] = useState('');

  const onNavStateChange = async () => {
    const currentRouteName =
      navigationRef.current?.getCurrentRoute()?.name || '';
    if (previousRouteName !== currentRouteName) {
      // TODO: This is for analytics, not sure if we are going to add but we can keep this here and remove if necessary
      //   await analytics().logScreenView({
      //     screen_name: currentRouteName,
      //     screen_class: currentRouteName,
      //   });
    }
    setPreviousRouteName(
      (navigationRef.current?.getCurrentRoute() || { name: '' }).name,
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current =
          navigationRef.current?.getCurrentRoute()?.name ?? '_undefined';
      }}
      onStateChange={onNavStateChange}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      {/* TODO: When redux state 'isLogged' is added, use the line below and remove the 'true' line underneath. Until then, toggle true/false to show different stacks */}
      {/* {isLogged ? ( */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          // eslint-disable-next-line no-constant-condition
          true ? (
            <Stack.Screen name={Route.AUTH_STACK} component={AuthStack} />
          ) : (
            <Stack.Screen name={Route.UN_AUTH_STACK} component={UnauthStack} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
