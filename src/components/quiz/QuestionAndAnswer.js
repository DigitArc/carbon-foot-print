import React from 'react'
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import QuestionBalloon from './QuestionBalloon';

const AnswerWrapper = styled.View`
  align-items: center;
  margin-top: 32px;
  width: 100%;
`

const QuestionAndAnswer = (props) => {
  const {question, Answer} = props;

  return (
    <View style={style.container}>
      <QuestionBalloon question={question} />
      <AnswerWrapper>
      {Answer}
      </AnswerWrapper>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 16,
  }
})

export default QuestionAndAnswer
