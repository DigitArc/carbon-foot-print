import React, { useState } from 'react';
import RadioGroup from '../radio-group/RadioGroup';
import colors from '../../styles/colors';

const RadioButtons = (props) => {
  let {data, changeData} = props;

  let radioInitialData = data.answers.map(
    (answer, i) => (
      {
        color: colors.primaryOrange,
        label: answer,
        value: answer.toLowerCase().split(' ').join(''),
        id: i
      }
    )
  )

  const [radioButtons, setRadioButtons] = useState(radioInitialData)

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray)
    let tempData = {...data};
    tempData.selectedAnswer = radioButtons.filter((rb) => rb.selected === true)[0]?.label;
    changeData(tempData)
  }

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
