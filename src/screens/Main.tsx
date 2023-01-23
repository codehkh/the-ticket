import styled from 'styled-components/native';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import FilterBar from 'components/filterbar/FilterBar';

import ListHome from 'screens/ListHome';

import { useFonts } from 'expo-font';

interface StyledMainProps {
  windowWidth: number;
  windowHeight: number;
  statusBar: number;
}

const StyledMain = styled.View<StyledMainProps>`
  width: ${(props) => props.windowWidth}px;
  height: ${(props) => props.windowHeight}px;
  margin-top: ${(props) => props.statusBar}px;
  background: #ffffff;
`;

const StyledHome = styled.View<StyledMainProps>`
  width: ${(props) => props.windowWidth}px;
  margin-top: ${(props) => props.statusBar + props.windowHeight * 0.07 + 12 +props.windowHeight * 0.06}px;
  background: #ffffff;
`;

const Main = (props: StyledMainProps) => {
  let [fontsLoaded] = useFonts({
    'NotoSansKR-Medium': require('assets/fonts/NotoSansKR-Medium.otf'),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <StyledMain
        windowWidth={props.windowWidth}
        windowHeight={props.windowHeight}
        statusBar={props.statusBar}>
        <Header
          width={props.windowWidth}
          height={props.windowHeight}
        />
        <FilterBar
          width={props.windowWidth}
          height={props.windowHeight}
        />
        <StyledHome
          windowWidth={props.windowWidth}
          windowHeight={props.windowHeight}
          statusBar={props.statusBar}>
          <ListHome
            width={props.windowWidth}
            height={props.windowHeight}
          />
        </StyledHome>
        <Footer
          width={props.windowWidth}
          height={props.windowHeight}
        />
      </StyledMain>
    );
  }
};

export default Main;
