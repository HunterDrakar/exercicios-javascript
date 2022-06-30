class contaBancaria{
    
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Saque negado, saldo insuficiente!"; 
        }
        this._saldo = this._saldo - valor;
        
        return this._saldo;
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
    
    set saldo(valor){
        this._saldo = valor;
    }
    
    get saldo(){
        return this._saldo;
    }

}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';

        this._cartaocredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaocredito;
    }

    set cartaoCredito(valor){
        return this._cartaocredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupança'
    }
}


class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária'
    }

    sacar(valor){
        if(valor > 500){
            return "Saque negado, o seu limite de saque é de 500"
        }

        this._saldo = this._saldo - valor;

        return this._saldo;


    }

}