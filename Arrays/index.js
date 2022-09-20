 console.log('Hello World');

 const numbers = [1,2,3,4,5]

 const sqaured = numbers.map(function(item) {
     return item * item
})

const arrayInput = [1,-4,12,0,-3,29,-150]

const getPositiveArray = (arr) =>{
    return arr.filter(item=>item>0).reduce((a,b)=> a+b)
};
console.log(getPositiveArray(arrayInput))
