import React from 'react'
import { useState } from 'react';
import { View, CheckBox } from 'react-native'
import styled from 'styled-components/native';
import { Card, StyledText } from '../../common'

const ProjectPriceCard = (props) => {
  const {project} = props;
  const [selected, setSelected] = useState(false);

  return (
    <StyledCard>
      <CheckBox 
        value={selected}
        onValueChange={setSelected}
      />
      <View>
        <StyledText size={15} color='black' weight='bold'>{project.projectName}</StyledText>
        <StyledText>Ton başına fiyat: {project.tonPrice}$</StyledText>
      </View>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  flex-direction: row;
  align-items: center;
  height: 70px;
`

export default ProjectPriceCard
