//de-sructructuring
const obj={
    name:"vijay",
    age:24,
    city:"Hyderabad"
};
const {name,city}=obj;
console.log(name,city);
let x=5;
let y=10;

[x,y]=[y,x];
console.log(x,y);

const arr1=[1,2,3];
const arr2=[...arr1,4,5,6];
console.log(arr2);
const user1={
    name:"vijay",
    age:24,
}
const user2={
    ...user1,
    city:"Hyderabad"
}
console.log(user2);

//spread operator --> cloning of arrays and objects

//rest operator --> collecting remaining elements

function sum(...numbers){
return numbers.reduce((total,current)=>total+current,0);
}
console.log(sum(1,2,3,4,5,6,7,8,9,0));