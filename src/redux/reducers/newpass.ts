import { handleActions } from "redux-actions";
import { INewpass} from "../../types/auth";
import { NewPassActions } from "../actions";

const initialState = null;

export const NewPassReducer = handleActions<INewpass | null, INewpass>({
  [NewPassActions.Type.NEW_PASS]: (state, action) => action.payload,
}, initialState)
