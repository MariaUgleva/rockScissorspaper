import { Reducer } from "redux";
import {
  setWinnerActionTypes,
  setWinerType,
} from "../Actions/setwinnerActions";

const initialState: string = "pending";

const winnerReducer: Reducer<string, setWinerType> = (
  state: string = initialState,
  action
) => {
  switch (action.type) {
    case setWinnerActionTypes.SET_WINNER:
      return action.winner;
    default:
      return state;
  }
};
export default winnerReducer;
