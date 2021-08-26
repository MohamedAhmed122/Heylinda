/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
// REDUX
import {useDispatch} from 'react-redux';
import {addSession} from '@redux/freeSessions/actions';
import {AppDispatch} from 'redux/store';
//TYPES
import {EmitterSubscription} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PlayNestedParamList} from '@typeRoots/Routes';
import {Meditation} from 'typeRoots';
//PLAY AUDIO
import {playSong, getInfo} from 'utils/sound';
import ViewPlaySound from '../View';
import SoundPlayer from 'react-native-sound-player';
//
import {data} from '@assets/data';
import Screen from 'common/Screen';

interface ContainerProps {
  id: string;
  navigation: StackNavigationProp<PlayNestedParamList, 'PlayScreen'>;
  // PlayNestedParamList
}
const Container: React.FC<ContainerProps> = ({id, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  let nextId = (Number(id) + 1).toString();
  let prevId = (Number(id) - 1).toString();

  let isNext = data.find((i: Meditation) => i.id === nextId) ? true : false;
  let isPrev = data.find((i: Meditation) => i.id === prevId) ? true : false;

  const dispatch = useDispatch<AppDispatch>();

  let item = data.find((i: Meditation) => i.id === id);
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
        dispatch(addSession(Number(item?.time)));
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
    if (item) {
      playSong(item.uri);
    }
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

  // handle go to next sound
  const goNext = (): void => navigation.navigate('PlayScreen', {id: nextId});

  // handle go back sound
  const goBack = (): void => navigation.navigate('PlayScreen', {id: prevId});

  return (
    <Screen>
      <ViewPlaySound
        item={item}
        onPressPlay={isPressed ? handleResumeSound : handlePlaySound}
        loading={loading}
        isFinished={isFinished}
        isPaused={isPaused}
        onPressPause={handlePauseSound}
        goNext={goNext}
        goBack={goBack}
        isNext={isNext}
        isPrev={isPrev}
      />
    </Screen>
  );
};

export default Container;
