let usuario = prompt("nome de usuário: ")

switch (usuario) {
    case "admin":
        console.log("usuário correto!")

        break;



    default:
        console.log("usuário incorreto.")

        break;
}

let senha = prompt("insira a senha")

switch (senha) {
    case "senha123":
        console.log("senha correta!")
        break;

    default:
        console.log("senha incorreta.")
        break;
}

window.alert("Login feito com sucesso!")
console.log("Apresenta mensagem na tela")