import React from 'react';
import {
  Loader,
  SplashScreenContainer,
  SplashScreenText,
} from './SplashScreen.style';

const SplashScreen = () => {
  return (
    <SplashScreenContainer>
      <SplashScreenText>NETFLIX</SplashScreenText><Loader color={'#e50914'} size={'large'} /></SplashScreenContainer>
  );
};

export default SplashScreen;
