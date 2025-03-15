// Classe Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método para calcular desconto de 10%
    calcularDesconto() {
        return this.preco * 0.9; // Aplica 10% de desconto
    }
}

// Classe Livro que herda de Produto
class Livro extends Produto {
    constructor(nome, preco) {
        super(nome, preco); // Chama o construtor da classe Produto
    }

    // Sobrescreve o método calcularDesconto para aplicar 20% de desconto
    calcularDesconto() {
        return this.preco * 0.8; // Aplica 20% de desconto
    }
}

// Exemplo de uso
const produto = new Produto("Notebook", 3000);
console.log(`Preço do ${produto.nome} com desconto: R$ ${produto.calcularDesconto().toFixed(2)}`);

const livro = new Livro("Dom Quixote", 50);
console.log(`Preço do livro "${livro.nome}" com desconto: R$ ${livro.calcularDesconto().toFixed(2)}`);