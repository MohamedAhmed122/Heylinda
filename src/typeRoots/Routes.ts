export type NO_PARAMS = undefined;
// import {Meditation} from './index';

export type RootTabParamList = {
  Home: NO_PARAMS;
  Setting: NO_PARAMS;
  Stats: NO_PARAMS;
};

export type RootStackHomeParamList = {
  HomeScreen: NO_PARAMS;
  PlayScreen: NO_PARAMS;
  SubscriptionScreen: NO_PARAMS;
  RegisterScreen: NO_PARAMS;
};

export type RootStackSubscriptionParamList = {
  HomeScreen: NO_PARAMS;
  SubscriptionScreen: NO_PARAMS;
  RegisterScreen: NO_PARAMS;
};

export type RootStackStatsParamList = {
  StatsScreen: NO_PARAMS;
};

export type RootStackSettingsParamList = {
  SettingsScreen: NO_PARAMS;
};

export type HomeParamList = {
  HomeScreen: NO_PARAMS;
  PlayScreen: {id: string};
};

export type PlayNestedParamList = {
  PlayScreen: {id: string};
  SubscriptionScreen: NO_PARAMS;
};

export type SettingParamList = {
  SettingScreen: NO_PARAMS;
  SubscriptionScreen: NO_PARAMS;
};
