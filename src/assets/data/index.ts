import {v4 as uuid} from 'uuid';
import {Meditation} from '../../types';

export const popular: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: 'Power of Love',
    track: 0,
    subtitle: 'Love and Peace',
    time: 2,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/17.mp3',
    image: require('../images/meditate6.jpg'),
  },
  {
    id: uuid(),
    order: 2,
    title: 'Quick Powerful Meditation',
    track: 1,
    subtitle: 'Busy At Work',
    time: 5,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/1.mp3',
    image: require('../images/meditate1.jpg'),
  },
  {
    id: uuid(),
    order: 3,
    title: 'Deep Breathing',
    track: 2,
    subtitle: 'Just Breath',
    time: 5,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/2.mp3',
    image: require('../images/meditate2.jpg'),
  },
  {
    id: uuid(),
    order: 4,
    title: 'Yawn and Stretch',
    subtitle: 'Rise and Shine',
    track: 3,
    time: 5,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/3.mp3',
    image: require('../images/meditate5.jpg'),
  },
];

export const anxiety: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: 'Deep and Quick Relaxation',
    track: 4,
    subtitle: 'Release Anxiety',
    time: 10,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/4.mp3',
    image: require('../images/meditate3.jpg'),
  },
  {
    id: uuid(),
    order: 2,
    title: 'Calming Medition',
    subtitle: 'Deep Relaxation',
    track: 7,
    time: 11,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/7.mp3',
    image: require('../images/meditate4.jpg'),
  },
  {
    id: uuid(),
    order: 2,
    title: 'Candle Relaxation',
    subtitle: 'Get Some Rest',
    track: 8,
    time: 11,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/8.mp3',
    image: require('../images/rocks.jpg'),
  },
];

export const sleep: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: 'Deep Sleep',
    subtitle: 'Wake Up Refreshed',
    track: 5,
    time: 8,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/5.mp3',
    image: require('../images/tea.jpg'),
  },
  {
    id: uuid(),
    order: 2,
    title: 'Short Sleep',
    subtitle: 'For Taking a Nap',
    track: 6,
    time: 28,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/6.mp3',
    image: require('../images/sleep.jpg'),
  },
  {
    id: uuid(),
    order: 2,
    title: 'Good Sleep',
    track: 12,
    subtitle: 'Drift Off To Sleep',
    time: 15,
    uri: 'https://goofy-ritchie-dd0c3d.netlify.app/meditations/12.mp3',
    image: require('../images/sleep2.jpg'),
  },
];

export const meditations = {
  popular,
  sleep,
  anxiety,
};
