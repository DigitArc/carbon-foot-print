import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledText } from '..';
import colors from '../../../styles/colors';

const DetailButton = ({title = "", color = colors.primaryTextClr, size = 16, weight = 'bold'}) => (
  <TouchableOpacity>
    <StyledText 
      color={color}
      size={size}
      weight={weight}
      style={{textDecorationLine: 'underline'}}
    >
      {title}
    </StyledText>
  </TouchableOpacity>
)

export default DetailButton;