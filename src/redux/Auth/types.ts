export enum ActionType {
  REGISTER_USER = 'REGISTER_USER',
  LOGOUT_USER = 'LOGOUT_USER',
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

export type Action = RegisterUser | LogoutUser;
