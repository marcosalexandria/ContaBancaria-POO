/*
- Crie uma classe conta bancaria
- Com as propiedades de saldo na conta corrente, saldo na conta poupança e juros da poupança(na data de aniversário, a conta poupança rende 1% do seu saldo)
- Crie os métodos de depósito e saque, também um método para tranferir dinheiro da conta corrente para a poupança
- Além disso, crie uma conta especial que herda da conta normal
- Na conta especial os juros são dobrados da conta normal
*/

class ContaBrancaria{
    constructor(contaCorrente,contaPoupanca,jurosPoupanca){
        this.contaCorrente=contaCorrente;
        this.contaPoupanca=contaPoupanca;
        this.jurosPoupanca=jurosPoupanca;
    }
    aniversario(){
        this.contaPoupanca += this.contaPoupanca*this.jurosPoupanca/100;
    }
    deposito(valor){
        this.contaPoupanca+=valor;
    }
    saque(valor){
        if(valor>this.contaPoupanca){
            console.log(`Você não tem o valor de R$: ${valor.toFixed(2)} na sua conta, verifique o seu saldo`);
        }else{
            this.contaPoupanca-=valor;
        }
    }
    transferir(valor){
        if(valor>this.contaCorrente){
            console.log(`Você não tem o valor de R$: ${valor.toFixed(2)} na sua conta, verifique o seu saldo`);
        }else{
            this.contaCorrente-=valor;
            this.contaPoupanca+=valor;
        }
    }
}

//Conta Normal
let conta= new ContaBrancaria(1000,1000,1);

//Classe de Conta Especial
class contaEspecial extends ContaBrancaria{
    constructor(contaCorrente,contaPoupanca,jurosPoupanca){
        super(contaCorrente,contaPoupanca,jurosPoupanca*2)  //jurosPoupanca * 2
    }
}

//Conta2 ESPECIAL
let conta2= new contaEspecial(15000,50000,1);