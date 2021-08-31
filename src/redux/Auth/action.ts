import {ActionType, Action, User} from './types';

export const registerUser = (user: User): Action => ({
  type: ActionType.REGISTER_USER,
  payload: user,
});

export const logoutUser = (): Action => ({
  type: ActionType.LOGOUT_USER,
});
