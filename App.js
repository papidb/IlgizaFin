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
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import RadialGradient from 'react-native-radial-gradient';

import {palette, Layout} from './src/constants';
import TopRight1 from './src/assets/svg/TopRight1.svg';
import TopRight2 from './src/assets/svg/TopRight2.svg';
import BottomLeft1 from './src/assets/svg/BottomLeft1.svg';
import BottomLeft2 from './src/assets/svg/BottomLeft2.svg';

const width = Layout.window.width;
const height = Layout.window.height;

const BUTTON_WIDTH = width - 2 * 30;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        {/* Blobs */}
        <View style={styles.blobs}>
          <View style={styles.TopRight1}>
            <TopRight1 {...{width}} />
          </View>
          <View style={styles.TopRight2}>
            <TopRight2 {...{width}} />
            {/* <SvgComponent /> */}
          </View>
          <View style={styles.BottomLeft1}>
            <BottomLeft1 {...{width}} />
          </View>
          <View style={styles.BottomLeft2}>
            <BottomLeft2 {...{width}} />
          </View>
          {/* Content */}
          <SafeAreaView style={{justifyContent: 'space-between', flex: 1}}>
            <View>
              <Text style={styles.header}>Finance App</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.buttonContainer}>
                <RadialGradient
                  style={styles.radialGradient}
                  colors={['#FFD600', '#EF0000']}
                  stops={[0.2, 0.7]}
                  center={[BUTTON_WIDTH / 2, -40]}
                  radius={200}>
                  <Text style={{color: 'white', fontSize: 24}}>Start</Text>
                </RadialGradient>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
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
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: palette.headerColor,
    marginTop: 40,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  radialGradient: {
    padding: 15,
    height: 60,
    width: BUTTON_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  blobs: {flex: 1},
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
  BottomLeft2: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: -2,
    shadowColor: palette.bottomLeft2Shadow,
    ...TOP_RIGHT_SHADOW,
  },
});

export default App;
