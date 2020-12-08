import { type } from "os";

export type gameDataType = {
  player: string;
  computer: string;
  [key: string]: string;
};
export type setGameDataType = {
  [key: string]: string;
};
export type objPriorityType = {
  rock: number;
  scissors: number;
  paper: number;
  [key: string]: number;
};
