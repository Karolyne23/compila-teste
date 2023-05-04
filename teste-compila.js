
// EXERCICIO 1
function somaValores(num1, num2){
     return num1+num2;
}

var resultado = somaValores(2, 5)
console.log(resultado);

// EXERCICIO 2
i = 10;
var j = 1;
for(var i=1; i < 5; i++) {
  j++;
}
console.log(i);
console.log(++j);

// EXERCICIO 3


// EXERCICIO 4
var arr = [1, 2, 4, 4, 5,6];//VARIAVEL GLOBAL QUE IREI USAR NO EXERCICIO 6
console.log(arr.length);


//EXERCICIO 6
var arr = [1, 2, 3, 4, 5, 6];//VARIAVEL GLOBAL QUE USEI NO EXERCICIO 4.

function retornaValor(pos){

  return arr[pos]
}
console.log(retornaValor(3));

//EXERCICIO 7
 var valorSomado = 13;
arr = [3, 5, 8];

function encontraValor(arr, valorSomado){
    for (let p1 = 0; p1 < arr.length; p1++) {
        
        for (let p2 = 0; p2 < arr.length; p2++) {
            if (arr[p1] + arr[p2] == valorSomado) {
                
                return arr[p1] + arr[p2];
            }
            
        }
    }
    return null
}

console.log(encontraValor (arr, valorSomado));

