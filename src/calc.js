export default function calc() {
    const result = [];
    const sumb = ['+', '-', '*'];
    const numOfSumb = (Math.floor(Math.random() * (2 - 0 + 1)) + 0);
    const randSumb = sumb[numOfSumb];
    const a = Math.round(Math.random() * 10)
    const b = Math.round(Math.random() * 10)

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
    };
    result.push(`Qestion:${a} ${randSumb} ${b}`);
    result.push(`${realAnswer}`);
    return result;
};
