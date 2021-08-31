import {ActionType, Action, User} from './types';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
};

interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
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
      };
    case ActionType.LOGOUT_USER:
      return {
        currentUser: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
