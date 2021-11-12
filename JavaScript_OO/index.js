import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Michel", 1234567789);
const contaCorrente = new ContaCorrente(cliente1, 1001);
contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);


const contaSalario = new ContaSalario(cliente1);
contaSalario.sacar(100);

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);