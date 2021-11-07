class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

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
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Michel";
cliente1.cpf = 123456789;

cliente2.nome = "Maria";
cliente2.cpf = 12345678999;

const contaCorrenteMichel = new ContaCorrente();
contaCorrenteMichel.agencia = 1001;

contaCorrenteMichel.depositar(150);
contaCorrenteMichel.sacar(50);

const valorSacado = contaCorrenteMichel.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteMichel);
