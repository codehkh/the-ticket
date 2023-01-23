import styled from 'styled-components/native';
import { Text } from 'react-native';
import Footer from '../components/footer/Footer';

interface StyledMainProps {
  windowWidth :number;
  windowHeight :number;
  statusBar :number;
}

const StyledMain = styled.View<StyledMainProps>`
  width: ${props => props.windowWidth}px;
  height: ${props => props.windowHeight}px;
  margin-top: ${props => props.statusBar}px;;
  background: #ffffff;
`;

const Main = (props:StyledMainProps) => {
  return (
    <StyledMain windowWidth={props.windowWidth} windowHeight={props.windowHeight} statusBar={props.statusBar}>

      <Text>assssaaa</Text>
      <Footer width={props.windowWidth} height={props.windowHeight}/>
    </StyledMain>
  );
};

export default Main;
