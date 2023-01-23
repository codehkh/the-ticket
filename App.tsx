import React from 'react';
//component
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Dimensions, View } from 'react-native';
//screen
import Main from './src/screens/Main';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <View>
      <Main
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        statusBar={Constants.statusBarHeight}
      />
      <StatusBar style="auto" />
    </View>
  );
}
