import readlineSync from 'readline-sync';
import{name}from '../src/cli.js';
export default

console.log('What is the result of the expression?')

//Спросить у Кирилла, почему если я выношу формулы с const за пределы цикла или выше console.log все ломается

for (let i = 0; i < 3; i += 1) {

  const findAllDividers = (num) => {
    let result = []
    if (num <= 1) {
        return num
    };
for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) {
        result.push(i)
    }
}
return result
};
// это довольно корявое решение, но главное, что оно рабоает!
const getHigherDivider = (mas1, mas2) => {
    const result = [];
    for (const num1 of mas1) {
      for (const num2 of mas2) {
        if (num1 === num2) {
          result.push(num1)
          break;
        }
      }
    }
    return result;
  };


    const num1 = Math.round(Math.random() * 100)
    const num2 = Math.round(Math.random() * 100)
    const num1Dividers = findAllDividers(num1)
    const num2Dividers = findAllDividers(num2)
    let realAnswer = getHigherDivider(num1Dividers, num2Dividers)

    console.log(`Question:${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) === realAnswer[0]) {
        console.log('Correct!')
    } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer[0]}'\nLet's try again, ${name}!`)
            break;
    };
    if (i === 2) {
        console.log(`Congratulation, ${name}!`)
    }
}
