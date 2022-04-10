import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LoginScreenStyle } from './LoginScreen.style';
import { Actions } from 'react-native-router-flux';

const LoginScreen = () => {
  const goToHomeScreen = () => {
    Actions.HomeScreen();
  };

  return (
    <LoginScreenStyle>
      <TouchableOpacity onPress={goToHomeScreen}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </LoginScreenStyle>
  );
};

export default LoginScreen;
