import React from 'react';
import {Image, View} from "react-native";
import colors from '../../styles/colors';
import {HomeCard, HomeContainer, StyledImageBg} from './HomeStyled';
import { PrimaryButton, Row, StyledText } from '../../components/common';

const imgSource = {uri: 'https://www.arborday.org/images/hero/xlarge/hero-aerial-forest-evergreen-trees.jpg'};

const co2Src = {uri: 'https://www.cleantechdelta.nl/wp-content/uploads/2017/11/CO2-ICON.png'}


const HomeScreen = ({navigation}) => {

  return (
    <HomeContainer>
      <StyledImageBg source={imgSource}>
        <StyledText size={22} weight={600} color="white">Küçük adımlarla birlikte harika şeyler ulaşmak için</StyledText>
      </StyledImageBg>
      <View style={{flex: 1}} />
      <HomeCard>
        <StyledText size={16} style={{marginBottom: 16}}>Türkiyede ortalama CO2 ayakizi</StyledText>
        <Row>
          <View style={{flex: 1}}>
            <StyledText size={24} color='black' weight={600}>12t</StyledText>
            <StyledText>Kişi başına ortalama co2</StyledText>
            <StyledText color={colors.lightTextClr}>Kaynak: Federal Çevre Ajansı</StyledText>
          </View>
          <Image style={{flex: 1, resizeMode: 'stretch'}} source={co2Src}/>
        </Row>
        <PrimaryButton 
          title='CO2 hesapla'
          onPress={() => navigation.navigate('calculate')}
          width='25%'
        />
      </HomeCard>
    </HomeContainer>
  );
}

export default HomeScreen;
