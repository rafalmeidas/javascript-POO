conta() {
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

function spreadOperator(){
    let numeros = [10, 30];
    console.log(this.somaDoisNumeros(...numeros));
}