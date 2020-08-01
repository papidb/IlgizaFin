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
} from 'react-native';
import {palette} from './src/constants';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: palette.mainBackground,
  },
});

export default App;
