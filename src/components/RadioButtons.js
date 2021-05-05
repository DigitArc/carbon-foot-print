import React, { useState } from 'react';
import RadioGroup from './radio-group/RadioGroup';
import colors from '../styles/colors';

const RadioButtons = (props) => {
  let {data} = props;

  data = data.answers.map(
    (answer, i) => (
      {
        color: colors.primaryOrange,
        label: answer,
        value: answer.toLowerCase().split(' ').join(''),
        id: i
      }
    )
  )

  const [radioButtons, setRadioButtons] = useState(data)

  const onPressRadioButton = (radioButtonsArray) => setRadioButtons(radioButtonsArray)

  return (
    <RadioGroup
      color={colors.primaryOrange}
      radioButtons={radioButtons} 
      onPress={onPressRadioButton}
      containerStyle={{backgroundColor: 'white', padding: 10, paddingTop: 12, paddingBottom: 12, borderRadius: 15}}
    />
  )
}

export default RadioButtons
