const jim = 91;
const dela = 87;
const chinku = 97;

/* if (jim > dela && jim > chinku){
    console.log('Jim will get the cake.');
}
else if (dela > jim && dela > chinku){
    console.log('Dela will get the cake.')
}
else{
    console.log('Chinku will get the cake.');
} */


/* const maximum = Math.max(jim, dela, chinku);

if (maximum == jim){
    console.log('Jim will get the cake.');
}
else if (maximum == dela){
    console.log('Dela will get the cake.')
}
else{
    console.log('Chinku will get the cake.');
} */

function findMax(a, b, c){
    maxIs = Math.max(a, b, c);
    return maxIs;
}

const maxNumber = findMax(jim, dela, chinku);
console.log(maxNumber);