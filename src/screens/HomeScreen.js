import React from 'react';
import {Button, Text, View} from "react-native";
import PrimaryButton from '../components/PrimaryButton';
import StyledCenterView from '../components/common/view/StyledCenterView';

const HomeScreen = ({navigation}) => {

  return (
    <StyledCenterView>
      <Text>Home</Text>
      <PrimaryButton 
        title='CO2 hesapla'
        onPress={() => navigation.navigate('calculate')}
        width='25%'
      />
    </StyledCenterView>
  );
}

export default HomeScreen;
