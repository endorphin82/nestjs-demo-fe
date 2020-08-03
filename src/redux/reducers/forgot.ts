import { handleActions } from "redux-actions";
import { IForgot} from "../../types/auth";
import { ForgotActions } from "../actions";

const initialState = null;

export const ForgotReducer = handleActions<IForgot | null, IForgot>({
  [ForgotActions.Type.FORGOT]: (state, action) => action.payload,
}, initialState)
