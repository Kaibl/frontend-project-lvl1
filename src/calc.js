import readlineSync from 'readline-sync';
import{name}from '../src/cli.js';
export default
console.log('What is the result of the expression?')
for (let i = 0; i < 3; i += 1) {

    const sumb = ['+', '-', '*'];
    const numOfSumb = (Math.floor(Math.random() * (2 - 0 + 1)) + 0);
    const randSumb = sumb[numOfSumb];
    const a = Math.round(Math.random() * 100)
    const b = Math.round(Math.random() * 100)

    let realAnswer = 0
    switch (randSumb) {
        case '+':
            realAnswer = a + b
            break;
        case '-':
            realAnswer = a - b
            break;
         case '*':
            realAnswer = a * b
            break;
            .
    };
    console.log(`Qestion:${a} ${randSumb} ${b}`);
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) === realAnswer) {
        console.log('Correct!')
    } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'\nLet's try again, ${name}!`)
            break;
    };
    if (i === 2) {
        console.log(`Congratulition, ${name}!`)
    }
}
