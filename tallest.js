function maxInArray(numbers){
    console.log('Array inside the array', numbers);

    let maxNumber = numbers[0];
    for (i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element);
        if (element > maxNumber){
            maxNumber = element;
        }
    }
    return maxNumber;
}

const heights = [167, 190, 120, 165, 137, 199];
const tallest = maxInArray(heights);
console.log('Tallest person is' , tallest);