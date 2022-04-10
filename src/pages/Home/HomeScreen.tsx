import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { HomeScreenStyle } from './HomeScreen.style';
import { Actions } from 'react-native-router-flux';
import Card from '../../components/Card/Card';
import { useCustomFetchPopularMovies } from '../../backend/apiCalls';
import { CardImage } from '../../components/Card/Card.style';

const HomeScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const { apiData } = useCustomFetchPopularMovies();

  const goToLogin = () => {
    Actions.LoginScreen();
  };

  useEffect(() => {
    if (apiData) {
      // @ts-ignore
      setData(apiData?.results);
    }
  }, [apiData]);

  return (
    <SafeAreaView>
      <ScrollView>
        <HomeScreenStyle style={{ padding: 10 }}>
          <TouchableOpacity onPress={goToLogin}>
            <Text>HomePage</Text>
          </TouchableOpacity>
          {data.map(element => {
            return <Card data={element} />;
          })}
        </HomeScreenStyle>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
