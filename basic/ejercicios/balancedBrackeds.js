console.log(isBalanced('{[()]}')); //true
console.log(isBalanced('{[(])}')); //false
console.log(isBalanced('{{[[(())]]}}')); //true
console.log(isBalanced('{{[[(())]]}}{}()')); //true


function isBalanced(input) {
  let array = convertirAArray(input)
  let arrayOpens = [];
  let aux;
  let estaOK = true;
  let cont = 0;
  while(cont < array.length && estaOK){
   
    aux = array[cont];

    if(esSigno(aux)){

      if(abre(aux)){
        arrayOpens.unshift(aux);

      }else if (arrayOpens.length != 0){ //Siempre llegan signos que cierran, se evaua si el array auxiliar esta vacio.

        let open = arrayOpens.shift();

        if(!seBalancean(open, aux)){
          estaOK = false;
        }
      }
    }
    cont++;
  }
  return input + " " + resultado(estaOK);
}

function convertirAArray(input){
  input.trim();
  input.replace(" ","")
  let array = input.split(""); 
  return array;
}

function esSigno(caracter) {
  let estaOk = false;
  if (cierra(caracter) || abre(caracter)) {
    estaOk = true;
  }
  return estaOk;
}

function abre(caracter) {
  let estaOk = false;
  if (caracter==="{" || caracter==="[" || caracter==="(") {
    estaOk = true;
  }
  return estaOk;
}

function cierra(caracter) {
  let estaOk = false;
  if (caracter==="}" || caracter==="]" || caracter===")") {
    estaOk = true;
  }
  return estaOk;
}

function seBalancean(abre, cierra) {
  let  estaOk = false;
  if (abre==="{" && cierra==="}"
  
      || abre==="[" && cierra==="]"

      || abre==="(" && cierra===")") {
        estaOk = true;
  }
  return estaOk;
}

function resultado(bool){
  if (bool){
    return "YES";
  }else {
    return "NO";
  }
}