import { ActionCreator } from "redux";
import { setGameDataType } from "../../type";

export enum gameDataTypes {
  UPDATE_DATA = "UPDATE_DATA",
  CLEAR_GAME_DATA = "CLEAR_GAME_DATA",
  SEND_DATA_TO_SAGA = 'SEND_DATA_TO_SAGA'
}
export type updateDataType = {
  type: gameDataTypes.UPDATE_DATA;
  data: setGameDataType;
};
export type clearDataType = {
  type: gameDataTypes.CLEAR_GAME_DATA;
};
export type sagaDataType = {
  type: gameDataTypes.SEND_DATA_TO_SAGA;
};
export type gameDataActionsTypes = updateDataType | clearDataType |sagaDataType;

export const updateDataAction: ActionCreator<updateDataType> = (
  data: setGameDataType
) => ({
  type: gameDataTypes.UPDATE_DATA,
  data: data,
});
export const clearDataAction: ActionCreator<clearDataType> = () => ({
  type: gameDataTypes.CLEAR_GAME_DATA,
});
export const sagaAction: ActionCreator<sagaDataType> = (
  data: setGameDataType
) => ({
  type: gameDataTypes.SEND_DATA_TO_SAGA,
  data: data,
});
