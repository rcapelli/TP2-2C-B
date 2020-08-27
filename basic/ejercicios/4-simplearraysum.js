const array = [1,2,3,4,0,50]

let suma = sum(array)
console.log(suma)

function sum(arr){
    let acum = 0
    for(let index = 0; index < arr.length; index++){
        acum += arr[index]
    }
    return acum
}