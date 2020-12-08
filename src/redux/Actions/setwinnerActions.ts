import { ActionCreator } from "redux";

export enum setWinnerActionTypes {
  SET_WINNER = "SET_WINNER",
}
export type setWinerType = {
  type: setWinnerActionTypes.SET_WINNER;
  winner: string;
};
export const setWinnerAction: ActionCreator<setWinerType> = (winner) => ({
  type: setWinnerActionTypes.SET_WINNER,
  winner: winner,
});
