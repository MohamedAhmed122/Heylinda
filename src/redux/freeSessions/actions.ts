import {ActionType, Action} from './types';

export const addSession = (session: number): Action => ({
  payload: session,
  type: ActionType.ADD_NEW_SESSION,
});

export const removeSession = (): Action => ({
  type: ActionType.REMOVE_ALL_SESSIONS,
});
