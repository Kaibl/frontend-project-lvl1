const getHigherDivider = (mas1, mas2) => {
  const result = [];
  for (const num1 of mas1) {
    for (const num2 of mas2) {
      if (num1 === num2) {
        result.push(num1);
        break;
      }
    }
  }
  return result;
};
const findAllDividers = (num) => {
  const result = [];
  if (num <= 1) {
    return num;
  }
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};

export default function gcd() {
  const answer = [];
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const num1Dividers = findAllDividers(num1);
  const num2Dividers = findAllDividers(num2);
  const realAnswer = getHigherDivider(num1Dividers, num2Dividers);

  answer.push(`${num1} ${num2}`);
  answer.push(realAnswer[0]);
  return answer;
}
