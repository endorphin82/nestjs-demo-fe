export interface IAuth {
  accessToken: string;
  refreshToken: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface INewpass {
  token: string;
  password: string;
}


export interface IForgot {
  email: string
}

export interface ISignUp {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
}
