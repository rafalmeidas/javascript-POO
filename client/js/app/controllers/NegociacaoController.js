class NegociacaoController {


    adiciona(event) {
        event.preventDefault();
        
        /*  
        ** bind faz a associação do método querySelector a qual pertence ao objeto document, então ele mantem o querySelector
        ** utilizando o document, e permite usar o metodo separado.
        */
        let $ = document.querySelector.bind(document);

        let inputData = $('#data');
        let inputQuantidade =  $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
        
        
        
    }
}