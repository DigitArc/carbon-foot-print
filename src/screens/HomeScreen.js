import React from 'react';
import {Button, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text>Home</Text>
      <Button
        title='CO2 hesapla'
        onPress={() => navigation.navigate('calculate')}
      />
    </View>
  );
}

export default HomeScreen;
