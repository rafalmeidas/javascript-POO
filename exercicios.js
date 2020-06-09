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