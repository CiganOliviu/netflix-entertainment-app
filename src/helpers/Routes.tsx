import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../pages/Home/HomeScreen';
import LoginScreen from '../pages/Login/LoginScreen';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="HomeScreen"
        component={HomeScreen}
        title="HomeScreen"
        initial={true}
      />
      <Scene key="LoginScreen" component={LoginScreen} title="LoginScreen" />
    </Scene>
  </Router>
);
export default Routes;
