import React, {useState} from 'react';
import {Button, Text, View} from "react-native";
import DonutChart from "../components/DonutChart";
import PrimaryButton from '../components/PrimaryButton';
import QuestionAndAnswer from '../components/QuestionAndAnswer';
import StyledPrimaryButton from '../components/styled/button/StyledPrimaryButton';
import StyledCenterView from '../components/common/view/StyledCenterView';
import colors from "../styles/colors";

// this data filled from backend 
const data = [
  {
    id: 0,
    page: 0,
    answerType: 'radio',
    question: 'Karbon ayak izinin ne olduğunu biliyor musunuz ?',
    answers: [
      'Evet biliyorum',
      'Hayır bilmiyorum',
    ],
    selectedAnswer: '',
  },
  {
    id: 1,
    page: 1,
    answerType: 'radio',
    question: 'Karbon ayak izinin ne olduğunu biliyor musunuz ?',
    answers: [
      'Evet biliyorum',
      'Hayır bilmiyorum',
    ],
    selectedAnswer: '',
  }
]

const CalculateScreen = ({navigation}) => {
  const [page, setPage] = useState(0);

  return (
    <View style={{margin: 16}}>
      <QuestionAndAnswer question={data[page].question} />
      {/* <Text>{page}</Text> */}
      <StyledCenterView>
        <PrimaryButton width="50%" title='ileri' disabled={(data.length-1) <= page} onPress={() => setPage((x) => x+1)}/>
      </StyledCenterView>
    </View>
  )
}

export default  CalculateScreen;
