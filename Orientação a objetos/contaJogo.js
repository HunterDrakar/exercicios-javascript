class contaPlayer{
    constructor(nick, id, tipo){
        this.nick = nick;
        this.id = id;
        this.tipo = tipo;
        this._saldo = 0;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

    comprar(valor){
        if(valor > this._saldo){
            return "Saldo insuficiente, compra negada!";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }
}

class contaAdmin extends contaPlayer{
    constructor(nick, id, painelAdmin){
        super(nick, id);
        this.tipo = "Admin";
        this._painelAdmin = painelAdmin;
    }

    set painelAdmin(valor){
        this._painelAdmin = valor;
    }

    get painelAdmin(){
        return this._painelAdmin;
    }
}

class contaNaoVerificada{
    constructor(nick, id){
        super(nick, id);
        this.tipo = "Nao Verificada";
    }

    depositar(valor){
        if(valor > 50){
            return "Verifique sua conta para fazer depósitos acima de 50!";
        }

        this._saldo = this._saldo + valor;

        return this._saldo;
    }

    comprar(valor){
        if(valor > 50){
            return "Verifique sua conta para poder realizar uma compra acima de 50!"
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

}

class contaVerificada extends contaPlayer{
    constructor(nick, id){
        super(nick, id);
        this.tipo = "Verificada";
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

    comprar(valor){
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}