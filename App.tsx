import React from 'react';
//component
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Dimensions, View } from 'react-native';
//screen
import Main from 'screens/Main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <View>
        <Main
          windowWidth={windowWidth}
          appHeight={windowHeight}
          statusBar={statusBarHeight}
        />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}
