import 'react-native-gesture-handler';

import { useEffect } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './src/navigation/Navigation';
import { persistor, store } from './src/redux/store';

const App = (): JSX.Element => {
  useEffect(() => {
    // TODO: update splash screen images according to the instructions below:
    // https://red-foundry.atlassian.net/wiki/spaces/RFKB/pages/2425159681/Adding+a+Splash+Screen+to+a+React+Native+App
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
