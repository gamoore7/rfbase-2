// import Map from '../../features/app/Map';
// import WelcomeScreens from '../../features/app/WelcomeScreen';
import IScreens from './IScreens';
import Login from '../../features/auth/Auth/Login';
// import Signup from '../../features/auth/Auth/Signup';
// import ForgotPassword from '../../features/auth/Password/ForgotPassword';
// import NewPassword from '../../features/auth/Password/NewPassword';
// import Verify from '../../features/auth/Verify';
// import { RFIcons, RFColors, RFTypography } from '../../features/reference';
import * as Route from '../../utils/route';

const publicScreens: IScreens[] = [
  {
    name: Route.LOGIN,
    component: Login,
  },
  // TODO: KEEP OR REMOVE THE SCREENS BELOW AS THE TEMPLATE GETS FILLED OUT
  // {
  //   name: Route.WELCOME,
  //   component: WelcomeScreens,
  // },
  // {
  //   name: Route.SIGNUP,
  //   component: Signup,
  // },
  // {
  //   name: Route.FORGOT_PASSWORD,
  //   component: ForgotPassword,
  // },
  // {
  //   name: Route.NEW_PASSWORD,
  //   component: NewPassword,
  // },
  // {
  //   name: Route.VERIFY,
  //   component: Verify,
  // },
  // {
  //   name: Route.MAP,
  //   component: Map,
  // },
  // {
  //   name: Route.COLORS,
  //   component: RFColors,
  // },
  // {
  //   name: Route.ICONS,
  //   component: RFIcons,
  // },
  // {
  //   name: Route.TYPOGRAPHY,
  //   component: RFTypography,
  // },
];

export default publicScreens;
