import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Michel", 1234567789);
const contaCorrente = new ContaCorrente(cliente1, 1001);
contaCorrente.depositar(500);


const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);



console.log(contaCorrente);
console.log(contaPoupanca);
