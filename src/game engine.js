import readlineSync from 'readline-sync';

export default function runGame(description, game) {
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log(`${description}`)

for (let i = 0; i < 3; i += 1) {
const questionAndAnswer = game();
const realAnswer = questionAndAnswer[1]
console.log(`Qestion: ${questionAndAnswer[0]}`) //вопрос
    const answer = readlineSync.question('Your answer: ')
    if (answer == realAnswer) {
        console.log('Correct!')
    } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer[1]}'\nLet's try again, ${name}!`)
            break;
    };
    if (i === 2) {
        console.log(`Congratulition, ${name}!`)
    }
}
};