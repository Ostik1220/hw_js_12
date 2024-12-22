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
function findBestEmployee() {

}