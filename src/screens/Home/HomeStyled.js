import styled from "styled-components/native";
import Card from '../../components/common/Card';
import colors from "../../styles/colors";

const HomeContainer = styled.View`
  position: relative;
  flex: 1;
  background-color: ${colors.primaryBgClr};
`;

const StyledImageBg = styled.ImageBackground`
  flex:1;
  padding: 16px;
`;

const HomeCard = styled(Card)`
  position: absolute;
  top: 15%;
  width: 90%;
  height: 80%;
  /* justify-content: space-around; */
`

export {
  HomeCard,
  HomeContainer,
  StyledImageBg,
}