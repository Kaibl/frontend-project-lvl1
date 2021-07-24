import readlineSync from 'readline-sync';
import{name}from '../src/cli.js';
export default 
console.log('Answer "yes" if the number is even, otherwise answer "no"')
for (let i = 0; i < 3; i += 1) {
    let number = Math.round(Math.random() * 1000)
    console.log(`Qestion:${number}`);
    const answer = readlineSync.question('Your answer: ')
    if (number % 2 === 0 && answer === 'yes') {
        console.log('Correct!')
    } else if (number % 2 !== 0 && answer === 'no') {
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