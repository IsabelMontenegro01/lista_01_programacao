# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
a) A saída será undefined seguido de erro 

A variável x é declarada com var, que sofre hoisting. O hoisting faz com que a declaração da variável (var x) seja movida para o topo do escopo, mas a atribuição (x = 5) permanece no local original. Então, no momento do console.log(x), a variável x existe (devido ao hoisting), mas ainda não foi atribuída, então seu valor é undefined.

A variável y é declarada com let, que também sofre hoisting, mas não é inicializada até que a linha let y = 10; seja executada. No momento do console.log(y), a variável y ainda não foi inicializada, resultando em um erro de referência



**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

A ideia da função era retornar 'Erro: número inválido' apenas se a ou b fosse 0. Porém, devido ao erro na condição if (a || b === 0), a função está retornando 'Erro: número inválido' sempre que a for qualquer número diferente de zero (mesmo que b não seja 0), como no caso de a = 2 e b = 1

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

b) O código imprime 200.

O erro no código está na falta do break no caso case "eletrônico". Isso faz com que o código "caia" no próximo caso (case "vestuário":), redefinindo o valor de preço para 200. Portanto, mesmo que o tipo seja "eletrônico", o valor retornado será 200.


______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
d) 24

Método map: multiplica cada número do array por 2, ficando [2,4,6,8,10]

Método filter: filtra os números maiores que 5, ficando [6,8,10]

Método reduce: soma os números restantes começando por 0. 
0+6=6 -> 6+8=14 -> 14+10=24


______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

c) ["banana", "abacaxi", "manga", "laranja"]

Elemento 0 é a banana

Método splice: remove 2 elementos a partir do índice 1 ("maçã" e "uva"). Em seguida, adiciona "abacaxi" e "manga" no mesmo índice (1).



______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

Além disso, a segunda afirmação não justifica a primeira, pois elas abordam aspectos diferentes da herança. A alternativa I descreve o propósito da herança e a afirmação II descreve a implementação.

______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

I (V) - No construtor de Funcionario, o super(nome, idade) chama o construtor da classe Pessoa, definindo os atributos nome e idade.

II (V) - Dentro do método apresentar() de Funcionario, o super.apresentar() chama o método apresentar() da classe Pessoa, garantindo que o comportamento da classe pai seja executado antes de adicionar o comportamento específico de Funcionario.

III (F) - JavaScript suporta herança de classes.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.


b) A asserção é verdadeira e a razão é falsa.

Asserção (V) - polimorfismo em POO é exatamente isso.

Razão (F) - JavaScript não suporta sobrecarga de métodos (definir múltiplos métodos com o mesmo nome, mas com parâmetros diferentes).



______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
;}
console.log(somaArray([1, 2, 3, 4]))
```
Correção:

````javascript
function somaArray(numeros) {
    //Inicializar a variável 'soma' com 0 para acumular o resultado.
    let soma = 0;

    // Usar 'let' para declarar 'i' e corrigir 'size' para 'length
    for ( let i = 0; i < numeros.length; i++) { 

        // Usar '+=' para acumular a soma do dobro de cada número.
        soma += 2 * numeros[i]; 
    }

    // Retornar o valor acumulado.
    return soma;

console.log(somaArray([1, 2, 3, 4])); 

}
````

No código original, a variável soma não foi declarada nem inicializada. Isso causaria um erro de referência (ReferenceError). Correção: inicializar soma com 0 para acumular o resultado da soma.

No código original, foi usado numeros.size, mas arrays em JavaScript não possuem a propriedade size. O correto é usar length. Correção: substituir size por length.

No código original, a variável soma era sobrescrita a cada iteração do loop, em vez de acumular o valor. Correção: usar o operador += para acumular o dobro de cada número na variável soma.

No código original, a variável i não foi declarada com let ou var, o que a tornaria uma variável global e poderia causar comportamentos inesperados. Correção: Declarar i com let para limitar seu escopo ao loop.

______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

````javascript
// Classe Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método para calcular desconto de 10%
    calcularDesconto() {
        return this.preco * 0.9;
    }
}

// Classe Livro que herda de Produto
class Livro extends Produto {
    constructor(nome, preco) {
        super(nome, preco); 
    }

    // Sobrescreve o método calcularDesconto para aplicar 20% de desconto
    calcularDesconto() {
        return this.preco * 0.8; 
    }
}

// Exemplo de uso
const produto = new Produto("Notebook", 3000);
console.log(`Preço do ${produto.nome} com desconto: R$ ${produto.calcularDesconto().toFixed(2)}`);

const livro = new Livro("Dom Quixote", 50);
console.log(`Preço do livro "${livro.nome}" com desconto: R$ ${livro.calcularDesconto().toFixed(2)}`);
````

A classe Livro herda os atributos (nome e preco) e o método (calcularDesconto) da classe Produto. Isso evita a duplicação de código, pois Livro não precisa redefinir os atributos ou métodos que já existem em Produto.

A classe Livro pode modificar o comportamento do método calcularDesconto() para atender às suas necessidades específicas (aplicar 20% de desconto em vez de 10%). Isso é possível porque o método da classe filha (Livro) sobrescreve o método da classe pai (Produto).

O mesmo método (calcularDesconto()) pode ter comportamentos diferentes dependendo da classe que o implementa. Isso permite que objetos de diferentes classes (Produto e Livro) respondam à mesma mensagem (calcularDesconto()) de maneiras diferentes.