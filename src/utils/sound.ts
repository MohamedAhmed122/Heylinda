import {Alert} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const playSong = (item: string): void => {
  try {
    SoundPlayer.playUrl(item);
  } catch (e) {
    Alert.alert('Cannot play the file');
    console.log('cannot play the song file', e);
  }
};

const getInfo = async (): Promise<number | void> => {
  // You need the keyword `async`
  try {
    const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
    console.log('getInfo', info); // {duration: 12.416, currentTime: 7.691}
    return info.currentTime;
  } catch (e) {
    console.log('There is no song playing', e);
  }
};

export {playSong, getInfo};
