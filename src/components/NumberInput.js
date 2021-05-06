import React from 'react'
import { View } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import colors from '../styles/colors';

const NumberInput = (props) => {
  const {data, changeData} = props;

  const onChange = (c) => {
    let tempData = {...data};
    tempData.selectedAnswer = c;
    changeData(tempData);
  }

  return (
    <NumericInput
      rounded
      type='plus-minus'
      onChange={onChange}
      iconStyle={{color: colors.darkGray}}
    />
  )
}

export default NumberInput
