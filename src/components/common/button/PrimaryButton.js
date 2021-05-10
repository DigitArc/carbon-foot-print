import React from 'react'
import { useRef } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

const PrimaryButton = (props) => {
  const {title, disabled, onPress, width, fontSize} = props;
  
  const buttonRef = useRef();

  const setButtonOpacity = (opacity) => buttonRef.current.setNativeProps({opacity})

  return (
    <View style={{width: width ? width : '100%', position: 'relative'}}>
      <StyledPrimaryButton 
        onPress={onPress} 
        ref={buttonRef} 
        width={width} 
        disabled={disabled}
      >
        <StyledText fontSize={fontSize}>{title}</StyledText>
      </StyledPrimaryButton>
      <StyledBorder
        disabled={disabled}
        onPressIn={() => setButtonOpacity(0.5)} 
        onPressOut={() => setButtonOpacity(1)} 
        width={width}
        onPress={onPress}
      />
    </View>
  )
}

const StyledPrimaryButton = styled.TouchableOpacity`
  background-color: ${(p) => p.disabled ? colors.primaryGray : colors.primaryOrange};
  border-radius: 4px;
  height: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #000;
  font-size: ${p => p.fontSize ? p.fontSize : 14}px;
  position: relative;
  top: -3px;
`;

const StyledBorder = styled.TouchableOpacity`
  border: #000 solid 1px;
  height: 30px;
  border-radius: 4px;
  width: 100%;
  position: absolute;
  top: -3px;
  left: 3px;
`;

export default PrimaryButton