const array=[-21,3,5,7,9]
const sum = (a,b,c,d) => a + b + c +d;


plusMin(array)
plusMax(array)

function plusMin(oneArray){
    let internArray = oneArray.slice()
    console.log(internArray)
    internArray.sort((function(a, b){return a-b}))
    
    console.log("La suma minima es: "+internArray[0]+", "+internArray[1]+", "+internArray[2]+", "+internArray[3]+" : "
        +sum(internArray[0],internArray[1],internArray[2],internArray[3]))
}

function plusMax(otherArray){
    let internArray = otherArray.slice()
    internArray.sort((function(a, b){return b-a}))
    
    console.log("La suma maxima es: "+internArray[3]+", "+internArray[2]+", "+internArray[1]+", "+internArray[0]+" : "
        +sum(internArray[0],internArray[1],internArray[2],internArray[3]))
}

