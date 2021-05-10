import React from 'react'
import { View, Image} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { Card, Center, PrimaryButton, Row, StyledText } from '../common';
import { useNavigation } from '@react-navigation/core';


const co2Src = {uri: 'https://cdn.vox-cdn.com/thumbor/-vLWQx5wm6WmUJJUaKzxTnZTX3g=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19159489/co2.jpg'}


const CalculateCard = (props) => {

  const navigation = useNavigation();

  return (
    <Container>
      <StyledText size={20}>Türkiyede ortalama CO2 ayakizi</StyledText>

      <Row>
        <View style={{flex: 1}}>
          <StyledText size={24} color='black' weight={900}>12t</StyledText>
          <StyledText size={12} color='black'>Kişi başına ortalama co2</StyledText>
          <StyledText style={{marginTop: 8}} size={12} color={colors.lightTextClr}>Kaynak: Federal Çevre Ajansı</StyledText>
        </View>
        <Image style={{flex: 1, resizeMode: 'stretch'}} source={co2Src}/>
      </Row>

      <LinkCard>
        <StyledText style={{marginBottom: 8}} size={18} color='black'>Karşılaştırmada karbon ayakizin ne kadar büyük?</StyledText>
        <StyledText style={{marginBottom: 8}} size={14}>Yaşam tarzınızın iklimi nasıl etkilediğini daha iyi anlayın.</StyledText>
        <Center style={{position: 'relative'}}>
          <PrimaryButton 
            title='CO2 hesapla'
            onPress={() => navigation.navigate('calculate')}
            width='80%'
          />
        </Center>
      </LinkCard>
    </Container>
  )
}

const Container = styled(Card)`
  position: absolute;
  top: 15%;
  width: 90%;
  height: 80%;
  justify-content: space-between;
`

const LinkCard = styled(Card)`
  background-color: ${colors.primaryBgClr};
  width: 100%;
  justify-content: space-between;
`

export default CalculateCard
