import React, {useState} from 'react';
import {View} from "react-native";
import styled from 'styled-components/native';

import colors from '../styles/colors';
import QuestionAndAnswer from '../components/quiz/QuestionAndAnswer';
import { Center, DonutChart, PrimaryButton } from '../components/common';
import Answer from '../components/quiz/Answer';

// this data filled from backend 
let data = [
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
  padding: 16px;
  justify-content: space-around;
  height: 100%;
  background-color: ${colors.primaryBgClr};
`;

const CalculateScreen = ({navigation}) => {
  const [page, setPage] = useState(0);

  const changeData = ({id, selectedAnswer}) => {
    const i = data.findIndex(d => d.id === id);
    data[i].selectedAnswer = selectedAnswer;
  }

  return (
    <StyledView>
      <Center>
        <DonutChart
          percentage={40} 
          color={colors.primaryGreen} 
          delay={500 + 100 * 2} 
          max={100}
        />
      </Center>

      <QuestionAndAnswer 
        question={data[page].question} 
        Answer={
          <Answer 
            data={data[page]} 
            answerType={data[page].answerType} 
            changeData={changeData}
          />
        } 
      />

      <Center>
        <PrimaryButton 
          width="50%"
          fontSize={18}
          title='ileri' 
          disabled={(data.length-1) <= page} 
          onPress={() => setPage((x) => x+1)}
        />
      </Center>
    </StyledView>
  )
}

export default  CalculateScreen;
