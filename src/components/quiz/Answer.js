import React from 'react';
import RadioButtons from './RadioButtons';
import {Text} from 'react-native';
import NumberInput from './NumberInput';

const mapAnswer = (props) => ({
  radio: <RadioButtons {...props} />,
  number: <NumberInput {...props} />
})

const Answer = ({answerType, ...props}) => {
  return mapAnswer(props)[answerType] ? mapAnswer(props)[answerType] : <Text>Beklenmedik bir hata oldu</Text>;
}

export default Answer
