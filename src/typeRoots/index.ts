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

export interface Stats {
  title: string;
  subTitle: string;
}

export interface MeditationItem {
  item: Meditation;
  onPress?: () => void;
}

export interface UserRegisterValue {
  name: string;
  email: string;
  confirmPassword: string;
  password: string;
}

export interface profileValue {
  name: string;
  email: string;
  age: string;
  job: string;
  bio: string;
}
