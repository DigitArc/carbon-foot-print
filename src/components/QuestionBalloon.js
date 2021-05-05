import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Balloon from 'react-native-balloon';
import colors from '../styles/colors';

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
      <Text style={styles.text}>{question}</Text>
    </Balloon>
  )
}

export default QuestionBalloon

const styles = StyleSheet.create({
  ballonContainer: {
    paddingLeft: 15,
    width: '70%',
  },
  text: {
    fontSize: 16,
  }
})
