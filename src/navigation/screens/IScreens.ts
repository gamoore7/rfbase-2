import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

interface IScreens {
  name: string;
  component: (props: unknown) => JSX.Element;
  options?: BottomTabNavigationOptions;
}

export default IScreens;
