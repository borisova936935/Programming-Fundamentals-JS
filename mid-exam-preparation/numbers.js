function numbers(input) {
    let numbers = input.split(' ').map(x => Number(x));
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let averageSum = sum / numbers.length;
    let biggerNums = numbers.filter(x => x > averageSum)
    biggerNums = biggerNums.sort((a, b) => b - a)
    biggerNums = biggerNums.slice(0, 5)

    if (biggerNums.length === 0) {
        console.log('No');
    } else {
        console.log(biggerNums.join(' '));
    }
}
numbers('10 20 30 40 50');

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');

numbers('1');

numbers('-1 -2 -3 -4 -5 -6');