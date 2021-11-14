//Classe abstrata = só serve para ser instanciada (herdada)
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deve instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata"
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get saldo() {
    return this._saldo;
  }

  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this._cliente = novoCliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  //Método abstrato.
  sacar(valor) {
    throw new Error("Método sacar da Conta é abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
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
