import styled from 'styled-components/native';
import colors from '../../styles/colors';

const StyledText = styled.Text`
  color: ${({color}) => color};
  font-size: ${({size}) => size}px;
  font-weight: ${({weight}) => weight};
`

StyledText.defaultProps = {
  color: colors.primaryTextClr,
  size: 14,
  weight: 400,
}

export default StyledText;