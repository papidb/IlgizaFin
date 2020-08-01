/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {palette, Layout} from './src/constants';
import TopRight1 from './src/assets/svg/TopRight1.svg';
import TopRight2 from './src/assets/svg/TopRight2.svg';
import BottomLeft1 from './src/assets/svg/BottomLeft1.svg';
import BottomLeft2 from './src/assets/svg/BottomLeft2.svg';

const width = Layout.window.width;
const height = Layout.window.height;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.TopRight1}>
          <TopRight1 {...{width}} />
        </View>
        <View style={styles.TopRight2}>
          <TopRight2 {...{width}} />
          {/* <SvgComponent /> */}
        </View>
        <Text>Hey</Text>
        <View style={styles.BottomLeft1}>
          <BottomLeft1 {...{width}} />
        </View>
        <View style={styles.BottomLeft1}>
          <BottomLeft2 {...{width}} />
        </View>
      </View>
    </View>
  );
};

const TOP_RIGHT_SHADOW = {
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 1,
  shadowRadius: 15,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: palette.mainBackground,
  },
  TopRight1: {
    position: 'absolute',
    right: 0,
    top: 0,
    shadowColor: palette.topRight1Shadow,
    ...TOP_RIGHT_SHADOW,
  },
  TopRight2: {
    position: 'absolute',
    right: -50,
    top: 0,
    zIndex: -1,
    shadowColor: palette.topRight2Shadow,
    ...TOP_RIGHT_SHADOW,
  },
  BottomLeft1: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: -2,
    shadowColor: palette.bottomLeft1Shadow,
    ...TOP_RIGHT_SHADOW,
  },
});

export default App;
