import { ActionCreator } from "redux";

export enum scoreActionTypes {
  WIN = "WIN",
  LOSS = "LOSS",
}
export type winType = {
  type: scoreActionTypes.WIN;
};
export type lossType = {
  type: scoreActionTypes.LOSS;
};
export type ScoreActions = winType | lossType;

export const winAction: ActionCreator<winType> = () => ({
  type: scoreActionTypes.WIN,
});
export const lossAction: ActionCreator<lossType> = () => ({
  type: scoreActionTypes.LOSS,
});
