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
    FirstTask (x, u) {
        return x + u
    },
    FirstSecond (x, u) {
        return x - u
    },
    FirstThird (x, u) {
        return x * u
    },
    FirstFourth (x, u) {
        return x / u
    }
}

function countProps (obj) {
    return Object.keys(obj).length;
}

console.log(countProps(commands))


//3

const employees = [
    {name: "Andrii", tasks: 34, salary: 15100, mood:"happy"},
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

}

console.log(countTotalSalary(employees))