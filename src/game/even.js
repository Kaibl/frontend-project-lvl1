export default function evenGame() {
    let number = Math.round(Math.random() * 1000)
    const result = [];
    result.push(Number(number))
    if (number % 2 === 0) {
        result.push('yes')
    } else if (number % 2 !== 0) {
        result.push('no')
}
return result
};