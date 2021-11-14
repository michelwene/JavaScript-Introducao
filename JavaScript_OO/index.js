import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Michel", 10000, 123456789);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Wene", 5000, 12345567889);
gerente.cadastrarSenha("123456789");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
console.log(diretorEstaLogado, gerenteEstaLogado);

const cliente = new Cliente("Martins", 12345677888, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");
console.log(clienteEstaLogado);
