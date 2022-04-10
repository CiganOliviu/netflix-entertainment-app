import React from 'react';
import { View } from 'react-native';
import { CardStyle, CardImage, CardTitle, CardPresentation } from './Card.style';

type CardType = {
  data: any;
};

const Card: React.FC<CardType> = ({ data }) => {
  return (
    <CardStyle>
      <View>
        <CardImage
          source={{
            uri: `https://image.tmdb.org/t/p/original${data?.poster_path}`,
          }}
        />
        <CardTitle>{data?.title}</CardTitle>
        <CardPresentation>{data?.overview.slice(0, 45)}...</CardPresentation>
      </View>
    </CardStyle>
  );
};

export default Card;
