let array=prompt("enter the array separated by comma");
let user= array.split(',').map(Number);
let sorted=user.sort((a,b) => a-b);
console.log(sorted);
