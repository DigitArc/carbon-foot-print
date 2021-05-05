import React from 'react'
import {View, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import QuestionBalloon from './QuestionBalloon';
import DonutChart from './DonutChart';
import StyledCenterView from './common/view/StyledCenterView';

const QuestionAndAnswer = (props) => {
  const {question, answers} = props;
  return (
    <View style={style.container}>
      <StyledCenterView>
        <DonutChart
          percentage={40} 
          color={colors.primaryGreen} 
          delay={500 + 100 * 2} 
          max={100}
        />
      </StyledCenterView>
      <QuestionBalloon question={question} />
      <StyledCenterView>
      {answers}
      </StyledCenterView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 16,
  }
})

export default QuestionAndAnswer
