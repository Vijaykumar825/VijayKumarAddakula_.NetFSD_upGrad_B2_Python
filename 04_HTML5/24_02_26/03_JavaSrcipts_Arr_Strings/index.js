let numbers=[1,2,3,4,5]
console.log(numbers.indexOf(4))
let newArr=numbers.slice(1,4)


console.log(newArr)

//splice - it remove a chunck of elements from the array-or it removes the no of elements and it can be add elemnts to

numbers.splice(1,3)
newArr.splice(2,0,2,3)//(indexposition,no of elemnts you want to remove,element to add,element to add(same for 3,4))
console.log(numbers)
console.log(newArr)

number1=[1,2,3,4]

//looping
number1.forEach(function(number){
  console.log(number*2)

}
)
//filtering
let number3=[1,2,3,4,5,6,7]
let res1=number3.filter(function(num){
  return num%2==0

})
console.log(res1)



let number2=[1,2,3,4,5,6]
let sum=number2.reduce(function(total,num){
  return total+num

},0)
console.log(sum)
let initialvalue=0
let res=number2.reduce(function(accumulator,currentvalue){
  return accumulator+currentvalue
},initialvalue)
console.log(res)


//sorting
num=[3,5,6,9,1,4,0]
num1=[3,5,6,9,1,4,0]
num.sort()
num1.sort().reverse()
console.log(num)
console.log(num1)