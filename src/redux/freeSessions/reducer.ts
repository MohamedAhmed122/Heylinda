import {Action, ActionType, dateType} from './types';
import {addNewDate} from 'utils/date';

const initialState = {
  days: [],
  sessions: 0,
  minutes: 0,
};

interface SessionState {
  days: dateType[] | [];
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
        days: addNewDate(state.days),
        sessions: state.sessions + 1,
        minutes: state.minutes + action.payload,
      };
    case ActionType.REMOVE_ALL_SESSIONS:
      return {
        days: [],
        sessions: 0,
        minutes: 0,
      };
    default:
      return state;
  }
};

export default sessionReducer;
