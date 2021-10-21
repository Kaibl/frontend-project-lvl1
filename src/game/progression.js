function compareNumbers(a, b) {
    return a - b;
};
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

export default function progression() {
    const array = newMas()
    const numPosition = Math.floor(Math.random() * (array.length))

const answer = [];

    let arrayForPlayer = array
    const realAnswer = array[numPosition];
   arrayForPlayer[numPosition] = '..'

    answer.push(arrayForPlayer);
    answer.push(realAnswer)
    return answer
};
