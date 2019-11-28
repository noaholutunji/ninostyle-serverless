import axios from '../../axios-orders';
import setAuthorizationToken from '../../utils/setAuthorization';
import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user: any) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userRegisterRequest(data: any) {
  return async (dispatch: (arg0: { type: string; user: any }) => void) => {
    const res = await axios.post('/register', data);
    const token = res.data.idToken;
    const user = res.data;
    // cookie.set('jwtToken', token);
    // cookie.set('user', user);
    setAuthorizationToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
  };
}
