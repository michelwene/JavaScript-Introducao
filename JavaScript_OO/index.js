class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Michel";
cliente1.cpf = 123456789;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Maria";
cliente2.cpf = 12345678999;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);

