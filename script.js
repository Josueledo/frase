let frasesBiblia = [
                "Jesus respondeu - Agora você não entende o que estou fazendo, porém mais tarde vai entender! - João 13:7",
                "Por que vocês me chamam 'Senhor, Senhor' e não fazem o que eu digo? - Lucas 6:46",
                "Quanto mais você fala, mais perto está de pecar; se você é sábio controle a sua língua.",
                "Por acaso eu procuro a aprovação das pessoas? Não! O que eu quero é a aprovação de Deus. Será que agora estou querendo agradar as pessoas? Se estivesse eu não seria servo de Cristo. - Gálatas 1:10",
                "O tolo mostra toda a sua raiva, mas o sábio se cala e a domida. - Provérbios 29:11",
                "Jesus respondeu: Agora você não entende o que estou fazendo, porém mais tarde vai entender. - João 13:7",
                "Os que confiam n oSenhor serão como o monte de Sião, que não se abala, mas permanece para sempre.-Salmos 125:1",
                "Pois, sabendo que o Senhor estava comigo, criei coragem - Esdras 7:28",
                "Quem fica esperando que o vento mude e que o tempo fique bom, nunca plantará, nem colherá nada. - Eclesiastes 11:4",
                "É melhor comer verduras na companhia de quem a gente ama do que comer a melhor carne onde existe ódio. - Provérbios 15:17",
                "Quem esconde os seus pecados não prospera, mas quem os confessa e os abandona encontra misericórdia - Provérbios 28:13",
                "Quem está satisfeito despreza o mel, mas para quem tem fome até o amargo é saboroso. Provérbios 27:7",
                "Diante de tudo isso, o que mais podemos dizer? Se Deus está do nosso lado, quem poderá nos vencer?  - Romanos 8:31",
                "Pois eu sou o Senhor, o seu Deus, que o segura pela mão direita e diz a você: Não tema; eu o ajudarei. - Isaias 41:13",
                "Não fui eu que lhe ordenei? seja forte e corajoso! Não se apavore, nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. - Josué 1:9 ",
                "Quando for a hora certa, eu o senhor farei acontecer. - Isaías 60:22"
                ]


let fraseGeral = [
                "Entendi que não adianta eu ser escudo se tiver que me defender da minha própria espada.",
] 

let texto = document.querySelector(".text")
let btn = document.querySelector('.new')
let page = document.querySelector('.page')


btn.addEventListener("click", function(){
    page.style.display = "inline"
    let numeroAleatorio =  Math.floor(Math.random() * frasesBiblia.length);
    texto.innerHTML = frasesBiblia[numeroAleatorio]

})



