import { Reducer } from "redux";
import {
  gameDataTypes,
  gameDataActionsTypes,
} from "../Actions/gameDataActions";
import { gameDataType } from "../../type";

const initialState: gameDataType = { player: "", computer: "" };

const gameDataReducer: Reducer<gameDataType, gameDataActionsTypes> = (
  state: gameDataType = initialState,
  action
) => {
  switch (action.type) {
    case gameDataTypes.UPDATE_DATA:
      const key = Object.keys(action.data)[0];
      console.log({ ...state, [key]: action.data[key] })
      return { ...state, [key]: action.data[key] };
    case gameDataTypes.CLEAR_GAME_DATA:
      return { ...initialState };
    default:
      return state;
  }
};
export default gameDataReducer;
