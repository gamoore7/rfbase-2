import IScreens from './IScreens';
import Home from '../../features/app/Home';
import Settings from '../../features/app/Settings';
import * as Route from '../../utils/route';

// DEV NOTES
// This authScreens array contains every screen that an authenticated user is allowed to see. Add more as needed.

const authScreens: IScreens[] = [
  {
    name: Route.HOME,
    component: Home,
  },
  {
    name: Route.SETTINGS,
    component: Settings,
  },
];

export default authScreens;
