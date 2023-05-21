//Object.preventExtensions, nada pode ser adicionado, apenas excluido
const produto = Object.preventExtensions(
    {
        nome: 'qualquer',
        preco: 1.99,
        tag: 'promoção'
    }
)

console.log('extensivel:', Object.isExtensible(produto));
produto.desccricao = 'borracha escolar branca'
delete produto.tag
console.log(produto);

//Object.seal, nada pode ser adicionado nem exluido, mas pode ter valores modificados
const pessoa = {
    nome: 'juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + constante