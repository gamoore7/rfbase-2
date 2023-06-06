import { ImageSourcePropType } from 'react-native';

// TODO: Import tab bar images
// TODO: Import translations
// import i18n from '../../translations';
import IScreens from './IScreens';
import * as Route from '../../utils/route';
import HomeStack from '../stacks/HomeStack';
import SettingsStack from '../stacks/SettingsStack';

export interface ITabStacks extends IScreens {
  default: string;
  images: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
  title: string;
}

const tabStacks: ITabStacks[] = [
  {
    component: HomeStack,
    default: Route.HOME,
    images: {
      active: null,
      inactive: null,
    },
    name: Route.HOME_STACK,
    // title: i18n.t('home'),
    title: 'Home',
  },
  {
    component: SettingsStack,
    default: Route.SETTINGS,
    images: {
      active: null,
      inactive: null,
    },
    name: Route.SETTINGS_STACK,
    // title: i18n.t('settings'),
    title: 'Settings',
  },
];

export default tabStacks;
