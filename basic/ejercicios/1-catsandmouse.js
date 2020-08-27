let catA = -100
let catB = -20
let mouse = -70


catsAndMouse(catA,catB,mouse)


function catsAndMouse(){
    searchCats(catA,catB,mouse)
}

function searchCats(number1,number2,number3){
    if(number1 != number3 && number2 != number3){
        verifyCats(number1,number2,number3)
    }else if(number1===number2 && number2===number3){
        console.log("El ratoncito está a salvo! Los gatos pelean entre ellos... fiuf")
    }
    else if(number1 == number3){
        console.log("el gato A está sobre el ratón!")
    }else console.log("el gato B está sobre el ratón!")
}

function verifyCats(number1,number2,number3){
    let distanceA = getCatPosition(number1,number3)
        let distanceB = getCatPosition(number2,number3)
        if(distanceA>distanceB){
            console.log("El gato B está más cerca del ratón")
        }else if(distanceA===distanceB){
            console.log("El ratoncito está a salvo! Los gatos pelean entre ellos... fiuf")
        }else console.log("El gato A está más cerca del ratón")
}

function getCatPosition(a,b){
    let distance
    if(a <= b){
        distance = b-a
        return distance
    }else if(a > b){
        distance = a-b
        return distance
    }
}

