import React from 'react'
import { View, Text } from 'react-native'
import { PrimaryButton } from '../components/common'

const ResultScreen = ({navigation}) => {
  return (
    <View>
      <Text>RESULT SCREEN</Text>
      <PrimaryButton
        title='kapat'
        width='50%'
        onPress={() => navigation.navigate('home')}
      />
      <PrimaryButton
        title='iklim projeleri'
        width='50%'
        onPress={() => navigation.navigate('climate-projects')}
      />
    </View>
  )
}

export default ResultScreen
