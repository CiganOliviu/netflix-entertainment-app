import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { HomeScreenStyle } from './HomeScreen.style';
import { Actions } from 'react-native-router-flux';

const HomeScreen = () => {
  const goToLogin = () => {
    Actions.LoginScreen();
  };

  return (
    <HomeScreenStyle>
      <TouchableOpacity onPress={goToLogin}>
        <Text>HomePage</Text>
      </TouchableOpacity>
    </HomeScreenStyle>
  );
};

export default HomeScreen;
