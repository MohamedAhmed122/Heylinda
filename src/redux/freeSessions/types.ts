export enum ActionType {
  ADD_NEW_SESSION = 'ADD_NEW_SESSION',
  REMOVE_ALL_SESSIONS = 'REMOVE_ALL_SESSIONS',
}

interface AddSession {
  type: ActionType.ADD_NEW_SESSION;
  payload: number;
}

interface RemoveSessions {
  type: ActionType.REMOVE_ALL_SESSIONS;
}

export type dateType = {
  selected: boolean;
  date: string;
  selectedColor: string;
};
export type Action = AddSession | RemoveSessions;
