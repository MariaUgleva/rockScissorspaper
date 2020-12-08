import { objPriorityType } from "../type";
// ф-я для определнения победителя
const getWinner = (player: string, computer: string) => {
  const objPriority: objPriorityType = {
    rock: 2,
    scissors: 1,
    paper: 0,
  };
  const difference = objPriority[player] - objPriority[computer];
  console.log(difference);
  switch (difference) {
    case 2:
    case -1:
      return "computer";
    case 1:
    case -2:
      return "player";
    case 0:
      return "draw";
    default:
      return "draw";
  }
};
export default getWinner;
