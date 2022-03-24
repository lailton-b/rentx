import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
  WrapperLogo
} from './styles';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirmSchedulingComplete() {
    navigation.navigate('Home')
  }


  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      
      <WrapperLogo>
        <LogoSvg width={width} />
      </WrapperLogo>

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmSchedulingComplete} />
      </Footer>
    </Container>
  );
}