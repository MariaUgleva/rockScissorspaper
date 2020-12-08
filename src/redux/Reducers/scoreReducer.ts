import { Reducer } from "redux";
import { scoreActionTypes, ScoreActions } from "../Actions/scoreActions";

const initialState: string | null = sessionStorage.getItem('score');

const scoreReducer: Reducer<number, ScoreActions> = (state: number = initialState ? +initialState : 0, action) => {
  switch (action.type) {
    case scoreActionTypes.WIN:
      sessionStorage.setItem('score', (state+1).toString());
      return ++state;
    case scoreActionTypes.LOSS:
      sessionStorage.setItem('score', (state-1).toString());
      return --state;
    default:
      return state;
  }
};
export default scoreReducer;
