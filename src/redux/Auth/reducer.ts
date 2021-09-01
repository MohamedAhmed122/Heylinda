import {ActionType, Action, User} from './types';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  isSuperUser: false,
};

interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
  isSuperUser: boolean;
}

const AuthReducer = (
  state: AuthState = initialState,
  action: Action,
): AuthState => {
  switch (action.type) {
    case ActionType.REGISTER_USER:
      return {
        currentUser: action.payload,
        isAuthenticated: true,
        isSuperUser: false,
      };
    case ActionType.SET_TO_SUPER_USER:
      return {
        ...state,
        isSuperUser: true,
      };
    case ActionType.LOGOUT_USER:
      return {
        currentUser: null,
        isAuthenticated: false,
        isSuperUser: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
