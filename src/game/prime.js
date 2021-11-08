export default function prime() {
  const number = Math.round(Math.random() * (99) + 2);
  const answer = [];
  answer.push(number);
  const findDivider = (num) => {
    const halfNum = num ** (1 / 2);
    let i = 1;
    do {
      i += 1;
      if (num % i === 0) {
        return 'EtoObman';
      }
    } while (i <= halfNum);
    return 'NeObman';
  };
  if (number > 2 && findDivider(number) === 'EtoObman') {
    answer.push('no');
  } else {
    answer.push('yes');
  }
  return answer;
}
