import {INewpass, IUser, IAuth} from "../../types";

export interface IRootState {
  router: any,
  user: IUser,
  auth: IAuth,
  newpass: INewpass,
}
