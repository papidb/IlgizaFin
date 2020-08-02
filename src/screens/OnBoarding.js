/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import RadialGradient from 'react-native-radial-gradient';

import {palette, Layout} from '../constants';
import TopRight1 from '../assets/svg/TopRight1.svg';
import TopRight2 from '../assets/svg/TopRight2.svg';
import BottomLeft1 from '../assets/svg/BottomLeft1.svg';
import BottomLeft2 from '../assets/svg/BottomLeft2.svg';
// import Surr from '../assets/svg/Surr.svg';

const width = Layout.window.width;
const height = Layout.window.height;

const BUTTON_WIDTH = width - 2 * 30;

export const OnBoarding = () => {
  const navigation = useNavigation();

  const goToHome = useCallback(() => navigation.navigate('Home'));
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
          </View>
          <View style={styles.BottomLeft1}>
            <BottomLeft1 {...{width}} />
          </View>
          <View style={styles.BottomLeft2}>
            <BottomLeft2 {...{width}} />
          </View>
          <View style={styles.coverImage}>
            <Image
              style={{flex: 1}}
              width={width}
              resizeMode="stretch"
              source={require('../assets/images/Surr.png')}
            />
          </View>
          {/* Content */}
          <SafeAreaView style={{justifyContent: 'space-between', flex: 1}}>
            <View>
              <Text style={styles.header}>Finance App</Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.upperShadow}>
                <View style={styles.lowerShadow}>
                  <TouchableOpacity
                    onPress={goToHome}
                    style={styles.buttonContainer}>
                    <RadialGradient
                      style={styles.radialGradient}
                      colors={['#FFD600', '#EF0000']}
                      stops={[0.2, 0.7]}
                      center={[BUTTON_WIDTH / 2, -40]}
                      radius={200}>
                      <Text style={styles.buttonText}>Start</Text>
                    </RadialGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

// export default OnBoarding;

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
    backgroundColor: palette.mainBackground,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: palette.headerColor,
    marginTop: 40,
  },
  coverImage: {
    position: 'absolute',
    bottom: height * 0.1,
    // bottom: 0,
    zIndex: -3,
    // top: '15%',
    // height: 500,
  },
  footer: {alignItems: 'center', marginBottom: 35},
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  upperShadow: {
    shadowColor: '#F10F01',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  lowerShadow: {
    shadowColor: '#FFCC01',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
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
    zIndex: -3,
    shadowColor: palette.topRight1Shadow,
    ...TOP_RIGHT_SHADOW,
  },
  TopRight2: {
    position: 'absolute',
    right: -50,
    top: 0,
    zIndex: -4,
    shadowColor: palette.topRight2Shadow,
    ...TOP_RIGHT_SHADOW,
  },
  BottomLeft1: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: -3,
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
  Surr: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'red',
  },
  buttonText: {color: 'white', fontSize: 24},
});
