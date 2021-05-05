import React, {useState} from 'react';
import {View} from "react-native";
import styled from 'styled-components/native';

import colors from '../styles/colors';
import PrimaryButton from '../components/PrimaryButton';
import QuestionAndAnswer from '../components/QuestionAndAnswer';
import StyledCenterView from '../components/common/view/StyledCenterView';
import Answer from '../components/Answer';
import DonutChart from '../components/DonutChart';

// this data filled from backend 
const data = [
  {
    id: 0,
    page: 0,
    answerType: 'radio',
    question: 'Karbon ayak izinin ne olduğunu biliyor musunuz ?',
    answers: [
      'Evet biliyorum, daha önce duymuştum',
      'Hayır bilmiyorum, daha önce hic duymadım',
      'Emin değilim, daha önce duymuş olabilirim',
    ],
    selectedAnswer: '',
  },
  {
    id: 1,
    page: 1,
    answerType: 'number',
    question: 'Kendine ait kaç adet elektronik eşyan var ?',
    answers: [],
    selectedAnswer: '',
  }
]

const StyledView = styled.View`
  margin: 16px;
  justify-content: space-around;
  height: 100%;
`;

const CalculateScreen = ({navigation}) => {
  const [page, setPage] = useState(0);

  return (
    <StyledView>
      <StyledCenterView>
        <DonutChart
          percentage={40} 
          color={colors.primaryGreen} 
          delay={500 + 100 * 2} 
          max={100}
        />
      </StyledCenterView>

      <QuestionAndAnswer 
        question={data[page].question} 
        Answer={
        <Answer 
          data={data[page]} 
          answerType={data[page].answerType} 
          />
        } 
      />

      <View style={{alignItems: 'flex-end'}}>
        <PrimaryButton 
          width="20%"
          fontSize={18}
          title='ileri' 
          disabled={(data.length-1) <= page} 
          onPress={() => setPage((x) => x+1)}
        />
      </View>
    </StyledView>
  )
}

export default  CalculateScreen;
