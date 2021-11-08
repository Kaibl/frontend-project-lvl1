export default function prime() {
  const number = Math.round(Math.random() * (99) + 2);
  const answer = [];
  answer.push(number);
  const findDivider = (number) => {
    const halfNum = Math.pow(number, 1 / 2);
    let i = 1;
    do {
      i += 1;
      if (number % i === 0) {
        return 'EtoObman';
      }
    } while (i <= halfNum);
  };
  if (number > 2 && findDivider(number) === 'EtoObman') {
    answer.push('no');
  } else {
    answer.push('yes');
  }
  return answer;
}
