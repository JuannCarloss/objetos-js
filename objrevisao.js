// coleção dinamica de pares chave/valor

const produto = new Object 
produto.nome = 'cadeira'
produto.marca = 'generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto.marca
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

console.log(carro);