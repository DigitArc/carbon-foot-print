import React from 'react';
import {Button, Text, View, ImageBackground} from "react-native";
import PrimaryButton from '../components/PrimaryButton';
import StyledCenterView from '../components/common/view/StyledCenterView';
import styled from 'styled-components/native';

const imgSource = {uri: 'https://www.arborday.org/images/hero/xlarge/hero-aerial-forest-evergreen-trees.jpg'};


const StyledImageBg = styled.ImageBackground`
  height: 50%;
  width: 100%;
`;

const Card = styled.View`
  background-color: white;
  width:90%;
  height: 50%;
  border-radius: 5px;
  padding: 10px;
`

const HomeScreen = ({navigation}) => {

  return (
    <StyledCenterView>
      <StyledImageBg source={imgSource}>
        <Text>Küçük adımlarla birlikte harika şeyler ulaşmak için</Text>
      </StyledImageBg>
      <Card>
        <Text>Home</Text>
        <PrimaryButton 
          title='CO2 hesapla'
          onPress={() => navigation.navigate('calculate')}
          width='25%'
        />
      </Card>
    </StyledCenterView>
  );
}

export default HomeScreen;
