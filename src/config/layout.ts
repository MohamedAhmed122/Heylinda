import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
let isSmallDevice = width < 375;

export {width, height, isSmallDevice};
