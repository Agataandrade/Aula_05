import ler = require("readline-sync");
import { Queue } from "./queueMetodos";
import { Stack } from "./stackMetodos";

const pilha = new Stack<string>();
let continua: string;

do {
    console.log("####### Pilha de Livros ###############");
    console.log("### Digite 1 para adicionar livro ####");
    console.log("### Digite 2 para retirar livro #######");
    console.log("### Digite 3 para ver a pilha #########");

    let opcao = ler.questionInt(" -> ");

    switch (opcao) {
        case 1:
            pilha.push(ler.question("Nome do livro:  "));
            break;

        case 2:
            pilha.pop();
            break;

        case 3:
            pilha.printStack();
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }

    continua = ler.question("Digite S para continuar: ");

} while (continua.toLowerCase() === "s");