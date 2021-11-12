import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Michel", 1234567789);
const cliente2 = new Cliente("Alice", 12345678999);

//cliente1.nome = "Michel";
//cliente1.cpf = 123456789;

//cliente2.nome = "Maria";
//cliente2.cpf = 12345678999;

const conta1 = new ContaCorrente(cliente1, 1001);


const conta2 = new ContaCorrente(cliente2, 100001);

conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);
