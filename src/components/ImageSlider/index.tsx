import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';
import FastImage from 'react-native-fast-image'

import { Bullet } from '../Bullet';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
  ImageIndex,
} from './styles';

interface Props {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({imagesUrl}: Props){ 
  const [imageIndex, setImageIndex] = useState(0); 

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={true} />
      </ImageIndexes>
      
      <CarImageWrapper>
        <CarImage 
          source={{ 
            uri: imagesUrl[0].photo        
          }}
          resizeMode="contain"            
        />
      </CarImageWrapper>
    </Container>
  );
}