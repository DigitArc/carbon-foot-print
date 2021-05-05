import React from 'react';
import RadioButtons from '../components/RadioButtons';
import {Text} from 'react-native';

const mapAnswer = (props) => ({
  radio: <RadioButtons {...props} />,
})

const Answer = ({answerType, ...props}) => {
  return mapAnswer(props)[answerType] ? mapAnswer(props)[answerType] : <Text>Beklenmedik bir hata oldu</Text>;
}

export default Answer
