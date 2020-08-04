import config from '../../config';

export const signInURL = `${config.BASE_URL}/auth/signIn`;
export const signUpURL = `${config.BASE_URL}/auth/signUp`;
export const newpassURL = `${config.BASE_URL}/auth/changemypass`;
export const forgotURL = `${config.BASE_URL}/auth/forgotPassword`;

export const signUpSuccessRoute = '/signup/success';
export const newpassSuccessRoute = '/newpass/sucess';
export const preforgotSuccessRoute = '/forgot/success';

export const rootRoute = '/';
