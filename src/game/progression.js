function compareNumbers(a, b) {
  return a - b;
}
const newMas = () => {
  const result = [];

  const masLen = Math.random() * (5) + 5;
  let firstNum = (Math.round(Math.random() * 100));
  const sumNum = (Math.floor(Math.random() * (8)) + 1);

  for (let i = 0; i < masLen; i += 1) {
    result.push(firstNum);
    firstNum += sumNum;
  }
  return result.sort(compareNumbers);
};

export default function progression() {
  const array = newMas();
  const numPosition = Math.floor(Math.random() * (array.length));

  const answer = [];

  const arrayForPlayer = array;
  const realAnswer = array[numPosition];
  arrayForPlayer[numPosition] = '..';

  answer.push(arrayForPlayer.join(' '));
  answer.push(realAnswer);
  return answer;
}
