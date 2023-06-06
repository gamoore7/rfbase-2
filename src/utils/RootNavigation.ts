import { createRef } from 'react';

import type { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export const navigate = (name: string, params = {}) => {
  if (navigationRef.current) {
    return navigationRef.current.navigate(name, params);
  }
  return null;
};
