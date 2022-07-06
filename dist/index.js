function cadastrarFuncionario() {
    event.preventDefault()
    // selecionando os elementos para interação
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let cpf = document.getElementById("cpf").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let cidade = document.getElementById("cidade").value
    let bairro = document.getElementById("bairro").value
    let rua = document.getElementById("rua").value
    let numeroCasa = document.getElementById("numeroCasa").value
    // criando botao para remover cadastro
    let botaoRemover = document.createElement("button")
    botaoRemover.innerText = "Remover"
    botaoRemover.style.padding = "2px 5px"
    botaoRemover.style.backgroundColor = "#514d5c"
    botaoRemover.style.color = "#fff"
    botaoRemover.setAttribute("onclick", "remover(this)")
    // criando item na lista
    let lista = document.getElementById("lista")
    let item = document.createElement("li")
    item.style.marginTop = "10px"
    item.innerText = `NOME: ${nome} ${sobrenome} \nCPF: ${cpf} \nDATA DE NASCIMENTO: ${dataNascimento} \nEMAIL: ${email} \nTELEFONE: ${telefone} \nENDEREÇO: ${rua}, ${numeroCasa}, ${bairro.toUpperCase()}, ${cidade.toUpperCase()}   `
    item.appendChild(botaoRemover)
    lista.appendChild(item)
    //limpando campos input
    nome = document.getElementById("nome").value = ""
    sobrenome = document.getElementById("sobrenome").value = ""
    cpf = document.getElementById("cpf").value = ""
    dataNascimento = document.getElementById("dataNascimento").value = ""
    email = document.getElementById("email").value = ""
    telefone = document.getElementById("telefone").value = ""
    cidade = document.getElementById("cidade").value = ""
    bairro = document.getElementById("bairro").value = ""
    rua = document.getElementById("rua").value = ""
    numeroCasa = document.getElementById("numeroCasa").value = ""
}

function remover(botao) {
    let elemento = botao.parentNode
    document.getElementById("lista").removeChild(elemento)
}

function exibir() {
    areaDados.style.display = "block"
    document.getElementById("botaoOcultar").style.display = "block"
    document.getElementById("botaoExibir").style.display = "none"
}

function ocultar() {
    areaDados.style.display = "none"
    document.getElementById("botaoOcultar").style.display = "none"
    document.getElementById("botaoExibir").style.display = "block"
}

const areaDados = document.getElementById("area-dados")