const getHigherDivider = (mas1, mas2) => {
  for (let i = 0; i < mas1.length; i += 1) {
    if (mas2.includes(mas1[i])) {
      return mas1[i];
    }
  }
  return null;
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
  const num1 = Math.round((Math.random() * 100) + 2);
  const num2 = Math.round((Math.random() * 100) + 2);
  const num1Dividers = findAllDividers(num1);
  const num2Dividers = findAllDividers(num2);
  const realAnswer = getHigherDivider(num1Dividers, num2Dividers);

  answer.push(`${num1} ${num2}`);
  answer.push(String(realAnswer));
  return answer;
}
