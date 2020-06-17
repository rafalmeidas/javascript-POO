class MensagemView extends View{

    constructor (template){
        super(template);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info"> ${model.texto} </p>` : `<p></p>`;
    }

}