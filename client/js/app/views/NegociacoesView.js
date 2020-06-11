class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.negociacoes.map( n => `

                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>

                `).join('')}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan = "3"></td>
                    <td>
                    ${
                        // Utilizaremos uma Immediately-invoked function expression (IIFE) ou a função imediata.
                        /*(function() {
                
                            let total = 0;
                            model.negociacoes.forEach(n => total+= n.volume);
                            return total;
                       })()*/

                    //    a função reduce(), que irá processar o array e no fim, disponibiliza um único resultado.
                       /*model.negociacoes.reduce(function(total, n) {
                            return total + n.volume;
                        }, 0.0)*/
                        // função reduce com arrow function
                        model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                      }
                    </td>
                </tr>
            </tfoot>
        </table>
        `;
    }
}