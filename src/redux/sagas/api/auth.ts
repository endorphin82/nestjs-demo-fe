import axios from 'axios';
import {ILogin, ISignUp, IForgot} from '../../../types';
import { ContentTypes } from '.';
import {resetURL, signInURL, signUpURL} from '../../constants/auth';

export function signIn (data: ILogin){
    return axios({
        url: signInURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}

export function signUp (data: ISignUp) {
    return axios({
        url: signUpURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}

export function forgot (data: IForgot) {
    return axios({
        url: resetURL,
        method: 'POST',
        headers: {
            'Content-Type': ContentTypes.APPLICATION_JSON,
        },
        data,
    });
}
