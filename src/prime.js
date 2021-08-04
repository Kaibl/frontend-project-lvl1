import readlineSync from 'readline-sync';
import{name}from '../src/cli.js';
export default
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
for (let i = 0; i < 3; i += 1) {
    let number = Math.round(Math.random() * (99) + 2)
    console.log(`Qestion:${number}`);
    const answer = readlineSync.question('Your answer: ')
    if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0 && answer === 'yes') {

        console.log('Correct!')
    }  else if((number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) && answer === 'no' && number !== 2 && number !== 3 && number !== 5 && number !== 7) {
    console.log('Correct!')
  } else {
        if (answer === 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}!`)
        break;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}!`)
        break;
        }
    };
    if (i === 2) {
        console.log(`Congratulition, ${name}!`)
    }
}