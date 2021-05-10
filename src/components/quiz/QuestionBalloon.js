import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Balloon from 'react-native-balloon';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

const BaloonText = styled.Text`
  font-size: 16px;
  color: ${colors.primaryTextClr};
`;

const QuestionBalloon = (props) => {
  const {question} = props;
  return (
    <Balloon
      borderColor={colors.lightGreen}
      backgroundColor='white'
      borderWidth={2}
      borderRadius={5}
      triangleSize={20}
      triangleDirection='left'
      containerStyle={styles.ballonContainer}
    >
      <BaloonText>{question}</BaloonText>
    </Balloon>
  )
}

export default QuestionBalloon

const styles = StyleSheet.create({
  ballonContainer: {
    paddingLeft: 15,
    width: '70%',
  }
})
