import styled from 'styled-components/native';
//components
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//screens
import ListHome from 'screens/ListHome';
import GridHome from 'screens/GridHome';
import CalendarHome from 'screens/CalendarHome';

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
  margin-top: ${(props) => props.statusBar + props.windowHeight * 0.075}px;
  background: #ffffff;
`;

const Main = (props: StyledMainProps) => {
  const [fontsLoaded] = useFonts({
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
        <StyledHome
          windowWidth={props.windowWidth}
          windowHeight={props.windowHeight}
          statusBar={props.statusBar}>
          <CalendarHome
            width={props.windowWidth}
            height={props.windowHeight - (props.statusBar + props.windowHeight * 0.075)}
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
