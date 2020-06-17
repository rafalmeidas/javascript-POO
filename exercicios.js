function conta() {
    let numeros = [3, 2, 11, 20, 8, 7];

    let novosNumeros = [];

    numeros.forEach(numero => {
        if (numero % 2) {
            novosNumeros.push(numero * 2);
        } else {
            novosNumeros.push(numero);
        }
    });

    console.log(novosNumeros);

}

function conta2() {
    let numeros = [3, 2, 11, 20, 8, 7];
    let novosNumeros = numeros.map(item => item % 2 ? item * 2 : item);
    console.log(novosNumeros);
}

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

function spreadOperator() {
    let numeros = [10, 30];
    console.log(this.somaDoisNumeros(...numeros));
}

/************************************************************/
function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];

/*listaDeNomes1.push(...listaDeNomes2);
exibeNoConsole(listaDeNomes1);*/

//exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, "Rafael"))

class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
}

/* Reescrever o código usando uma arrow function
numeros.reduce(function(total,num) {
    return total * num;
}, 1);*/
let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];
numeros.reduce((total, num) => total * num, 1);

function exercicioMap() {
    let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];

    let dobra = numeros.map( num => num * 2);

    let metade = numeros.map( num => num / 2);

    let raiz = numeros.map(num => Math.sqrt(num));
    console.log(dobra);
    console.log(metade);
    console.log(raiz);
    
    
}