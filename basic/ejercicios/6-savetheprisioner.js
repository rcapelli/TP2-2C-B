const prisioners = 5
let candys = 2
let chairNumber = 1
let poisonCandy = saveThePrisioner(prisioners,candys,chairNumber)

function saveThePrisioner(p,ca,ch){
    let numberOfPrisioner
    while(ca>1){
        ca--
        ch++
        if(ch > p){
            ch = 1
        }
        numberOfPrisioner = ch
        return console.log("El veneno lo tendrá el prisionero número: "+numberOfPrisioner)
    }
}