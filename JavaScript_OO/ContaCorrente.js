import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;

  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this._cliente = novoCliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  get saldo() {
    return this._saldo;
  }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;

}

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    conta.cidade = "São Paulo";
    const valorSacado = this.sacar(valor);
    conta.depositar(valor);
  }
}
