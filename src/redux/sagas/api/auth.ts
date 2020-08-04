import axios from 'axios';
import {ILogin, ISignUp, INewpass, IForgot} from '../../../types';
import {ContentTypes} from '.';
import {forgotURL, newpassURL, signInURL, signUpURL} from '../../constants/auth';

export function signIn(data: ILogin) {
  return axios({
    url: signInURL,
    method: 'POST',
    headers: {
      'Content-Type': ContentTypes.APPLICATION_JSON,
    },
    data,
  });
}

export function signUp(data: ISignUp) {
  return axios({
    url: signUpURL,
    method: 'POST',
    headers: {
      'Content-Type': ContentTypes.APPLICATION_JSON,
    },
    data,
  });
}

export function newpass(data: INewpass) {
  return axios({
    url: newpassURL,
    method: 'POST',
    headers: {
      'Content-Type': ContentTypes.APPLICATION_JSON,
    },
    data,
  });
}

export function forgot(data: IForgot) {
  console.log('forgot');
  return axios({
    url: forgotURL,
    method: 'POST',
    headers: {
      'accept': '*/*',
      'Content-Type': ContentTypes.APPLICATION_JSON,
    },
    data,
  });
}
