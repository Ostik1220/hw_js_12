//1

const user = {
    name: "tyler",
    hobby: "Golf",
    premium: true
}
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
//console.log(user)
const result = Object.keys(user)
console.log(result)
for(const keys of result) {
    console.log(keys)
}


//2 
const commands = {
    firstTask (x, u) {
        return x + u
    },
    firstSecond (x, u) {
        return x - u
    },
    firstThird (x, u) {
        return x * u
    },
    firstFourth (x, u) {
        return x / u
    }
}

function countProps (obj) {
    return Object.keys(obj).length;
}

console.log(countProps(commands))


//3

const employees = [
    {name: "Andrii", tasks: 34, salary: 15100, mood:"sad"},
    {name: "Marta", tasks: 26, salary: 14300, mood:"angry"},
    {name: "Jan", tasks: 35, salary: 14500, mood:"tired"},
    {name: "Oleg", tasks: 12, salary: 8700,mood: "happy"}
]


function findBestEmployee(arr, tasks) {
let max = 0; 
let bestEmployee = ""; 

for (let employee of arr) {
  if (employee.tasks > max) {
    max = employee.tasks;
    bestEmployee = employee.name; 
  }
}

return bestEmployee;

}

console.log(findBestEmployee(employees))

//4

function countTotalSalary (arr) {
    let middleSalary = 0;

    for (let employee of arr) {
            middleSalary += employee.salary           
        
    }
    middleSalary = middleSalary / arr.length
    return middleSalary
}

console.log(countTotalSalary(employees))


//5
function getAllPropValues(arr, prop) {
    let array = [];
    for (let employee of arr) {  
        if(prop in employee){
            array.push(employee[prop])
        }
}
return array
}

console.log(getAllPropValues(employees, 'mood'))
console.log(getAllPropValues(employees, 'tasks'))

//6
const basket = [
 {name:"apple", costPer1:5,},
 {name: "meat", costPer1: 25,},
 {name: "pinapple", costPer1: 100,},
 {name: "big red fish from ocean", costPer1:150,}
]
function calculateTotalPrice(allProdcuts, productName, amount){
    let price = 0;
for(let product of allProdcuts){
    if(productName === product.name){
        price = amount * product.costPer1
    }
}
return price
}

console.log(calculateTotalPrice(basket, "apple", 7))
console.log(calculateTotalPrice(basket, "big red fish from ocean", 8))