import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../pages/Home/HomeScreen';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="HomeScreen"
        component={HomeScreen}
        title="HomeScreen"
        initial={true}
      />
    </Scene>
  </Router>
);
export default Routes;
