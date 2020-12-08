// ф-я для выбора фигурки компьютером
const RandomChoice = (variantsArray: Array<string>): string => {
  const numb = Math.floor(Math.random() * Math.floor(variantsArray.length));
  return variantsArray[numb];
};
export default RandomChoice;
