import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/helpers/Routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Routes />;
};

export default App;
