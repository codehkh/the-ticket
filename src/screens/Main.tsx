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
  appHeight: number; // statusBar 제외 높이
  statusBar: number;
}

const StyledMain = styled.View<StyledMainProps>`
  width: ${(props) => props.windowWidth}px;
  height: ${(props) => props.appHeight}px;
  margin-top: ${(props) => props.statusBar}px;
  background: #ffffff;
`;

const StyledHome = styled.View<StyledMainProps>`
  width: ${(props) => props.windowWidth}px;
  height: ${(props) => props.appHeight-(props.appHeight * 0.0849) - 52}px;
  margin-top: ${(props) => props.appHeight * 0.0849}px;
  margin-bottom: 52px;
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
        appHeight={props.appHeight}
        statusBar={props.statusBar}>
        <Header
          width={props.windowWidth}
          height={props.appHeight}
        />
        <StyledHome
          windowWidth={props.windowWidth}
          appHeight={props.appHeight}
          statusBar={props.statusBar}>
          <CalendarHome
            width={props.windowWidth}
            height={props.appHeight}
          />
        </StyledHome>
        <Footer
          width={props.windowWidth}
          height={props.appHeight}
        />
      </StyledMain>
    );
  }
};

export default Main;
