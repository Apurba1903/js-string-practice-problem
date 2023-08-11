const result = Math.pow(2, 4);
// console.log(result);



// ---------------------------------------------------



const person1 = 20;
const person2 = 60;
const gap = Math.abs(person1 - person2);
if (gap < 5){
    // console.log('You guys can be friends.');
}
else{
    // console.log('You guys cannot be friends.');
}



// -------------------------------------------------



const number = 2.49999991;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const upWord = Math.ceil(number);
// console.log(upWord);

const downWord = Math.floor(number);
// console.log(downWord);



// ---------------------------------------



for (let i = 0; i < 10; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}