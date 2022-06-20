const imputPerg = document.querySelector("#perg")
const respostaFinal = document.querySelector("#respostaFinal")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta() {
    // console.log(imputPerg.value)
    if (imputPerg.value == "") {
        alert("Digite sua pergunta!") 
        return
    }
    const pergunta = "<div>" + imputPerg.value + "</div>"
    // gerar número aleatório
    const totalResposta = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalResposta)
    respostaFinal.innerHTML = pergunta + respostas[numeroAleatorio]
    // sumir pergunta do imput após clicar no botão)
    setTimeout(function(){
        imputPerg.value = ""
    }, 500)
}