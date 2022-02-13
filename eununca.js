let qtd = prompt('Quantas pessoas vão jogar?')
let pontuação = []
let jogadores = [] //, prompt('Jogador 2'), prompt('Jogador 3'), prompt('Jogador 4')

for (a = 0; a<qtd; a++){
    jogadores[a] = prompt(`${a+1}° Jogador:`)
    pontuação[a] = 15
}
var jog = document.getElementById('jog')
jog.innerHTML = `Os jogadores são: `
for (let b in jogadores){
    jog.innerHTML+= `${jogadores[b]} `
}

const lista = ['Eu nunca fiquei obcecado em stalkear alguém nas redes sociais.',
'Eu nunca fui expulso da sala de aula.',
'Eu nunca desmaiei na rua.',
'Nunca peguei carona com estranhos.',
'Eu nunca fui parado por policiais.',
'Nunca andei a cavalo.',
'Eu nunca quebrei um osso.',
'Eu nunca quebrei um dente.',
'Eu nunca criei uma conta falsa nas redes sociais.',
'Eu nunca tive uma experiência paranormal.',
'Eu nunca tive algum perfil de rede social hackeado.',
'Nunca roubei algo em uma loja.',
'Eu nunca tive paralisia do sono.',
'Eu nunca fiquei preso no elevador.',
'Eu nunca tentei cortar meu próprio cabelo.',
'Eu nunca pintei o cabelo de alguma cor estranha.',
'Nunca cantei em um karaokê na frente de várias pessoas.',
'Eu nunca apareci na TV.',
'Eu nunca passei mal em um parque de diversões.',
'Eu nunca corri da polícia.',
'Eu nunca pedi dinheiro no sinal.',
'Eu nunca me arrependi imediatamente após enviar uma mensagem.',
'Eu nunca levei um tapa no rosto.',
'Eu nunca dei um tapa no rosto de alguém.',
'Eu nunca participei de uma briga.',
'Eu nunca chorei no transporte público.',
'Eu nunca passei mais de dois dias sem tomar banho.',
'Eu nunca olhei o celular de alguém sem que a pessoa soubesse.',
'Eu nunca fui demitido.',
'Eu nunca dormi na rua.',
'Nunca peguei comida do lixo e comi.',
'Eu nunca consegui algo de graça dando em cima de alguém.',
'Nunca caí na rua porque estava olhando o celular.',
'Eu nunca tive um vídeo constrangedor postado na internet.',
'Eu nunca quebrei algo na casa de alguém e escondi.',
'Eu nunca saí de uma festa ou bar sem pagar.',
'Eu nunca me gabei por algo que não fiz.',
'Eu nunca menti tanto sobre algo que acreditei que fosse verdade.',
'Eu nunca sofri bullying na escola.',
'Eu nunca segurei a mão da pessoa errada na rua.',
'Eu nunca fui expulso de uma festa.',
'Eu nunca postei algo e me arrependi.',
'Eu nunca roubei dinheiro da carteira dos meus pais.',
'Eu nunca comi comida que caiu no chão.',
'Eu nunca comi comida que alguém largou na área de alimentação do shopping.',
'Nunca fiquei com mais de 5 pessoas em uma festa.',
'Nunca beijei alguém que eu não conhecia.',
'Eu nunca fiquei com o irmão/irmã de um amigo.',
'Eu nunca dormi no ônibus e perdi o meu ponto.',
'Eu nunca fiquei apaixonado por algum professor.',
'Eu nunca fui assaltado.',
'Eu nunca recebi flores.',
'Eu nunca menti para meus pais sobre onde estava indo.',
'Eu nunca fiz xixi em uma piscina do lado dos meus amigos.',
'Eu nunca usei Crocs.',
'Eu nunca vomitei na frente de outras pessoas.',
'Eu nunca soltei pum em um elevador e fingi que não fui eu.',
'Eu nunca segui a pessoa errada na rua.',
'Eu nunca deixei meu celular cair na privada.',
'Eu nunca fui em uma festa sem ser chamado.',
'Eu nunca beijei alguém famoso.',
'Eu nunca fiquei com gêmeos.',
'Eu nunca vomitei e tive que engolir.',
'Eu nunca gostei mais de um filme do que do seu livro.',
'Eu nunca entrei em casa pela janela.',
'Eu nunca ri tanto que fiz um pouco de xixi.',
'Nunca passei o número errado para alguém.',
'Eu nunca menti para alguém sobre qual era meu nome.',
'Eu nunca tive o meu nome no SPC.',
'Eu nunca precisei ir ao médico devido a um objeto estranho preso em meu nariz ou ouvido.',
'Eu nunca usei identidade falsa para entrar em uma festa.',
'Eu nunca pesquisei meu nome no Google.',
'Eu nunca dei de presente algo que ganhei e não gostei.',
'Eu nunca convenci um amigo a largar a namorada.',
'Eu nunca apaguei um post porque teve poucas curtidas.',
'Eu nunca usei a escova de dentes de outra pessoa.',
'Eu nunca me inscrevi em um reality show.',
'Eu nunca culpei outra pessoa por um erro meu.',
'Eu nunca menti sobre um candidato em que votei.',
'Eu nunca dei um conselho ruim para alguém de propósito.']

let k = document.getElementById('k')
var pontos = document.getElementById('pontos')
var parar = document.getElementById('parar')
var jn = document.getElementsByName('radjn')
var x = 0
var p = 1

function continuar(){
    pontos.innerHTML = ''
        if (jn[0].checked){
        pontuação[x] -= 1
        }
        for (let d = 0;d<qtd;d++){
            pontos.innerHTML += `${jogadores[d]}: ${pontuação[d]} pontos</br>`
        }
        x+=1
        k.innerHTML = `${jogadores[x]}`
        if (p >= jogadores.length){
            x = 0
            k.innerHTML = `${jogadores[0]}`
            p = 0
            }  
        // console.log(k)
        // console.log(jogadores)
        console.log(x)
    p++
}
var l = 0
function proxima(){
    let pergunta = document.getElementById('pergunta')
    pergunta.innerHTML = `Pergunta: ${lista[l]}`
    l++
}
