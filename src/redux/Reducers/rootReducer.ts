import { combineReducers } from "redux";
import { gameDataType } from "../../type";
import gameDataReducer from "./gameDataReducer";
import scoreReducer from "./scoreReducer";
import winnerReducer from "./winnerRedicer";

export type AppState = {
  gameData: gameDataType;
  score: number;
  winner: string;
};
const rootReducer = combineReducers<AppState>({
  gameData: gameDataReducer,
  score: scoreReducer,
  winner: winnerReducer,
});

export default rootReducer;
