function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('ate breve', 456)
console.log(aula1, aula2);