import React from 'react';
import {Text, View} from "react-native";
import DonutChart from "../components/DonutChart";
import colors from "../styles/colors";

const CalculateScreen = ({navigation}) => {
  return (
    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 16}}>
      <DonutChart percentage={40} color={colors.primaryGreen} delay={500 + 100 * 2} max={100}/>
    </View>
  )
}

export default  CalculateScreen;
