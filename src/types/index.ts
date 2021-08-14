import {ImageSourcePropType} from 'react-native';
export interface Meditation {
  id: string;

  title: string;

  subtitle: string;

  time: number;

  order: number;

  image: ImageSourcePropType;

  uri: string;

  track: number;
}

export interface MeditationItem {
  item: Meditation;
}
