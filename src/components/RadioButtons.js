import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import colors from '../styles/colors';

// this data will be come from props 
const radioButtonsData = [{
  id: '1',
  label: 'Option 1',
  value: 'option1'
}, {
  id: '2',
  label: 'Option 2',
  value: 'option2'
}]

const RadioButtons = (props) => {
  const {data} = props;

  const [radioButtons, setRadioButtons] = useState(data)

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup
      color={colors.primaryGreen}
      radioButtons={radioButtons} 
      onPress={onPressRadioButton} 
    />
  )
}

export default RadioButtons
