import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Layout = {
  window: {
    width,
    height,
  },
};

export const palette = {
  mainBackground: '#E3DBDB',
  text: '#551400',
  topRight1Shadow: '#BEAEAE',
  topRight2Shadow: '#DAD0D0',
  bottomLeft1Shadow: '#D1B8B8',
};
