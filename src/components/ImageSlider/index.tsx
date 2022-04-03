import React, { useState, useRef } from 'react';
import { FlatList, Text, ViewToken } from 'react-native';
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
  imagesUrl: string[];
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
  })

  return (
    <Container>
      <ImageIndexes>
        {
          imagesUrl.map((_, index) => (
            <ImageIndex
              key={"image-index-" + index}
              active={imageIndex === index}
            />
          ))
        }
      </ImageIndexes>
      
      <CarImageWrapper>
        <FlatList
          data={imagesUrl}
          keyExtractor={key => key}
          renderItem={({ item }) => (
            <CarImageWrapper>
              <CarImage
                source={{ uri: item }}
                resizeMode="contain"
              />
            </CarImageWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
      </CarImageWrapper>
    </Container>
  );
}