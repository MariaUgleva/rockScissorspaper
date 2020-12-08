import { put, takeEvery, delay } from "redux-saga/effects";
import { updateDataType, gameDataTypes } from "../Actions/gameDataActions";
import RandomChoice from "../../Functions/RandomChoise";

function* sendChoice(action: updateDataType) {
  yield put({ type: gameDataTypes.UPDATE_DATA, data: action.data });
  yield delay(2000);
  yield put({
    type: gameDataTypes.UPDATE_DATA,
    data: { computer: RandomChoice(["paper", "scissors", "rock"]) },
  }); 
}

function* sagaListener() {
  yield takeEvery(gameDataTypes.SEND_DATA_TO_SAGA, sendChoice);
}
export default sagaListener;
