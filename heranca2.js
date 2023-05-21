// cadeia de protótipos (prototype chain)

Object.prototype.atributo0 = '0'
const avo = {atributo1: 'a'}
const pai = {__proto__: avo, atributo2: 'b'}
const filho = {__proto__: pai, atributo3: 'c'}

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3);

/*filho aponta para pai, pai aponta para avo e avo aponta 
para o prototype superior, assim, filho tem acesso aos
atributos acima dele (pai e avo), assim como pai tem acesso
ao de cima dele (avo) */

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}


const ferrari = {
    modelo: 'f40',
    velMax: 340 // shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
ferrari.acelerarMais(300)
console.log(volvo.status());
console.log(ferrari.status());

/*prototype pai chamado carro, com velocidade atual e velocidade
maxima, seus filhos (ferrari e volvo), recebem modelo e velocidade
maxima, uma função para acelerar é criada, fazendo com que
o carro chegue apenas a velocidade maxima fornecidade dentro
de seu atributo */
