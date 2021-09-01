export enum ActionType {
  REGISTER_USER = 'REGISTER_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SET_TO_SUPER_USER = 'SET_TO_SUPER_USER',
}

export interface User {
  name: string;
  email: string;
}

interface RegisterUser {
  type: ActionType.REGISTER_USER;
  payload: User;
}

interface LogoutUser {
  type: ActionType.LOGOUT_USER;
}

interface SetSuperUser {
  type: ActionType.SET_TO_SUPER_USER;
}

export type Action = RegisterUser | LogoutUser | SetSuperUser;
