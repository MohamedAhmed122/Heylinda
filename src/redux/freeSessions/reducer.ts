import {Action, ActionType} from './types';

const initialState = {
  days: 0,
  sessions: 0,
  minutes: 0,
};

interface SessionState {
  days: number;
  sessions: number;
  minutes: number;
}

const sessionReducer = (
  state: SessionState = initialState,
  action: Action,
): SessionState => {
  switch (action.type) {
    case ActionType.ADD_NEW_SESSION:
      return {
        days: state.days + 1,
        sessions: state.days + 1,
        minutes: state.minutes + action.payload,
      };
    case ActionType.REMOVE_ALL_SESSIONS:
      return {
        days: 0,
        sessions: 0,
        minutes: 0,
      };
    default:
      return state;
  }
};

export default sessionReducer;
