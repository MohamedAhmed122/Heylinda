/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
// REDUX
import {useDispatch} from 'react-redux';
import {addSession} from '@redux/freeSessions/actions';
import {AppDispatch} from 'redux/store';
//TYPES
import {EmitterSubscription} from 'react-native';
import {HomeParamList} from '@typeRoots/Routes';
//PLAY AUDIO
import {playSong, getInfo} from 'utils/sound';
import PlaySound from './SoundPlayer';
import SoundPlayer from 'react-native-sound-player';
import Screen from 'common/Screen';

interface PlayScreenProps {
  route: RouteProp<HomeParamList, 'PlayScreen'>;
}
const PlayScreen: React.FC<PlayScreenProps> = ({route}) => {
  const {item} = route.params;
  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  // instance variables to store the subscriptions
  let _onFinishedPlayingSubscription: EmitterSubscription;
  let _onFinishedLoadingSubscription: EmitterSubscription;

  // Subscribe to events you want when component mounted
  useEffect(() => {
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log('finished playing', success);
        setIsFinished(true);
        dispatch(addSession(Number(item.time)));
      },
    );
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
        setLoading(false);
      },
    );

    // Remove all the subscriptions when component will unmount
    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingSubscription.remove();
    };
  }, [isPaused]);

  // handle PlaySound for the first time
  const handlePlaySound = (): void => {
    setLoading(true);
    playSong(item.uri);
    getInfo();
    setIsPaused(true);
    setIsPressed(true);
  };

  // handle Pause Sound
  const handlePauseSound = (): void => {
    SoundPlayer.pause();
    setIsPaused(false);
  };

  // handle Resume Sound
  const handleResumeSound = (): void => {
    SoundPlayer.resume();
    setIsPaused(true);
  };

  // handle skip 15s
  const skip = (): void => SoundPlayer.seek(15);

  // handle skip back 15s
  const skipBack = (): void => SoundPlayer.seek(-15);

  return (
    <Screen>
      <PlaySound
        item={item}
        onPressPlay={isPressed ? handleResumeSound : handlePlaySound}
        loading={loading}
        isFinished={isFinished}
        isPaused={isPaused}
        onPressPause={handlePauseSound}
        skip={skip}
        skipBack={skipBack}
      />
    </Screen>
  );
};

export default PlayScreen;
