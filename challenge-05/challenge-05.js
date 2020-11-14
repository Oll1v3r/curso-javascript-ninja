/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 'Dean', false, NaN, 101100, null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaObjeto(obj) {
	// Retornar o objeto passado como argumento
	return obj;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaObjeto(arr)[1]); // Imprime o retorno no console

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnObject(obj, numPosition) {
	/* 
	 Retornar o valor do 'obj' que for passado no
	 no primeiro parâmetro (um objeto) no índice que for passado 
         no segundo parâmetro (um número)
	*/
	return obj[numPosition];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var types = [ undefined, true, false, 0, -0 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(retornaObjeto(types));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook) {
	var livros = {
		'Super Natural': {
			quantidadePaginas: 500,
			autor: 'Chock',
			editora: 'Super Natural test'
		},
		'Friedrich Nietzsche': {
			quantidadePaginas: 325,
			autor: 'Friedrich Nietzsche',
			editora: 'Martin Claret'
		},
		'Ansiedade': {
			quantidadePaginas: 160,
			autor: 'Augusto Cury',
			editora: 'Saraiva'
		}
	}

	return !nameBook ? livros : livros[nameBook];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nameBook = 'Super Natural';
console.log('O livro ' + nameBook + ' Tem ' + book('Super Natural').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nameBook + ' é ' + book(nameBook).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nameBook + ' foi publicado pela editora ' + book(nameBook).editora);
