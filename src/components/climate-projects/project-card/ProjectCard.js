import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native';
import ProjectPriceCard from './ProjectPriceCard';
import { DetailButton, StyledText } from '../../common';

const ProjectCard = (props) => {
  const { item, index } = props;
  return (
    <ImageBg key={index} source={{uri: item.imgSrc}}>
      <View style={{marginBottom: 16}}>
        <StyledText color='white' size={18} >{item.title}</StyledText>
        <StyledText color='white' size={14} >{item.content}</StyledText>
        <DetailButton color='white' size={16} title='Detayını göster' />
      </View>
      <ProjectPriceCard project={item} />
    </ImageBg>
  )
}

const ImageBg = styled.ImageBackground`
  width: 60%;
  height: 100%;
  border-radius: 25px;
  padding: 20px;
  align-self: center;
  flex: 1;
  margin-right: 12px;
  justify-content: flex-end;
`

export default ProjectCard
