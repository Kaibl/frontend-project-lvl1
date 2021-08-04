import readlineSync from 'readline-sync';
import{name}from '../src/cli.js';
export default

console.log('What number is missing in the progression?')

function compareNumbers(a, b) {
    return a - b;
  }

  const newMas = (mas) => {
      let result = []

      const masLen = Math.random() * (5) + 5;
      let firstNum = (Math.round(Math.random() * 100))
      const sumNum = (Math.floor(Math.random() * (8)) + 1)

      for (let i = 0; i < masLen; i += 1) {
        result.push(firstNum)
      firstNum += sumNum
      }
      return result.sort(compareNumbers)
  };


  const getAnswer = (mas) => {
	const num = Math.floor(Math.random() * (mas.length))
	console.log(num)
	let result = mas[num]
	return result
};

for (let i = 0; i < 3; i += 1) {
    const array = newMas()
    const numPosition = Math.floor(Math.random() * (array.length))



    let arrayForPlayer = array
    const realAnswer = array[numPosition];
   arrayForPlayer[numPosition] = '..'

    console.log(`Question:${arrayForPlayer}`);
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) === realAnswer) {
        console.log('Correct!')
    } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'\nLet's try again, ${name}!`)
            break;
    }
    if (i === 2) {
        console.log(`Congratulation, ${name}!`)
    }
};
