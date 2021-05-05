import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components/native';
import colors from '../styles/colors';

const StyledPrimaryButton = styled.TouchableOpacity`
  background-color: ${(p) => p.disabled ? colors.primaryGray : colors.primaryOrange};
  border-radius: 4px;
  height: 30px;
  width: ${p => p.width ? p.width : '100%'};
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
  width: ${p => p.width ? p.width : '100%'};
  position: relative;
  top: -33px;
  left: 3px;
`;


const PrimaryButton = (props) => {
  const {title, disabled, onPress, width, fontSize} = props;
  const buttonRef = useRef();
  return (
    <>
      <StyledPrimaryButton onPress={onPress} ref={buttonRef} width={width} disabled={disabled}>
        <StyledText fontSize={fontSize}>{title}</StyledText>
      </StyledPrimaryButton>
      <StyledBorder
        disabled={disabled}
        onPressIn={() => buttonRef.current.setNativeProps({opacity: 0.5})} 
        onPressOut={() => buttonRef.current.setNativeProps({opacity: 1})} 
        width={width}
        onPress={onPress}
      />
    </>
  )
}

export default PrimaryButton