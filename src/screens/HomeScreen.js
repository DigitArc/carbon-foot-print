import React from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
import colors from '../styles/colors';
import { StyledText } from '../components/common';
import CalculateCard from '../components/home/CalculateCard';

const imgSource = {uri: 'https://c4.wallpaperflare.com/wallpaper/551/1/180/trees-top-view-forest-wallpaper-preview.jpg'};


//if have result data see "iklim projeleri(climate projects)" linking 
const ResultData = {

}

const HomeScreen = ({navigation}) => {

  return (
    <HomeContainer>
      <StyledImageBg source={imgSource}>
        <StyledText size={22} weight={600} color="white">Küçük adımlarla birlikte harika şeyler ulaşmak için</StyledText>
      </StyledImageBg>

      <View style={{flex: 1}} />

      <CalculateCard />
    </HomeContainer>
  );
}

const HomeContainer = styled.View`
  position: relative;
  flex: 1;
  background-color: ${colors.primaryBgClr};
`;

const StyledImageBg = styled.ImageBackground`
  flex:1;
  padding: 16px;
`;

export default HomeScreen;
