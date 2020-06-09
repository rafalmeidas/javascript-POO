class ListaNegociacoes {
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // retornando uma cópia da minha lista, caso tentem adicionar algo não dará certo.
        return [].concat(this._negociacoes);
    }
}