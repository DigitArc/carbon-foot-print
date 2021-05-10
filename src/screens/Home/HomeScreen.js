import React from 'react';
import { Image, View } from "react-native";
import colors from '../../styles/colors';
import { HomeCard, HomeContainer, StyledImageBg, CalculateCard } from './HomeStyled';
import { Center, PrimaryButton, Row, StyledText } from '../../components/common';

const imgSource = {uri: 'https://c4.wallpaperflare.com/wallpaper/551/1/180/trees-top-view-forest-wallpaper-preview.jpg'};

const co2Src = {uri: 'https://cdn.vox-cdn.com/thumbor/-vLWQx5wm6WmUJJUaKzxTnZTX3g=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19159489/co2.jpg'}


const HomeScreen = ({navigation}) => {

  return (
    <HomeContainer>
      <StyledImageBg source={imgSource}>
        <StyledText size={22} weight={600} color="white">Küçük adımlarla birlikte harika şeyler ulaşmak için</StyledText>
      </StyledImageBg>

      <View style={{flex: 1}} />

      <HomeCard>
        <StyledText size={16} style={{marginBottom: 16}}>Türkiyede ortalama CO2 ayakizi</StyledText>

        <Row>
          <View style={{flex: 1}}>
            <StyledText size={24} color='black' weight={900}>12t</StyledText>
            <StyledText size={12} color='black'>Kişi başına ortalama co2</StyledText>
            <StyledText style={{marginTop: 8}} size={12} color={colors.lightTextClr}>Kaynak: Federal Çevre Ajansı</StyledText>
          </View>
          <Image style={{flex: 1, resizeMode: 'stretch'}} source={co2Src}/>
        </Row>

        <CalculateCard>
          <StyledText style={{marginBottom: 8}} size={18} color='black'>Wie groß ist dein Fußabdruck im Vergleich?</StyledText>
          <StyledText style={{marginBottom: 8}} size={14}>Verstehe besser, wie sich dein Lebensstil auf das Klima auswirkt.</StyledText>
          <Center style={{position: 'relative', bottom: -24}}>
            <PrimaryButton 
              title='CO2 hesapla'
              onPress={() => navigation.navigate('calculate')}
              width='80%'
            />
          </Center>
        </CalculateCard>
      </HomeCard>
    </HomeContainer>
  );
}

export default HomeScreen;
