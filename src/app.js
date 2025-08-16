// Classe Despesas que irá armazenar as despesas
class Despesas {
    // Pegando os valores que estão sendo passados na instancia da classe colocando no método "constructor", para colocar nos atributos
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
        // Definindo os atributos da classe, e atribuindo os valores que estão vindo dos inputs
    }
}

// Classe que fará a lógica de ir armazenando todos os cadastrados e não substituindo os que já estão cadastrados
class Bd {

    constructor() {
        // Verificando se existe um id no localStorage
        let id = localStorage.getItem('id');

        // Se "id" for igual a "null"
        if(id === null) {
            localStorage.setItem('id', 0);
            // Ele vai colocar como 0 o id mesmo que não tenha cadastrado nada
        }
    }

    // Método que recupera o id de cada cadastro que está indo para o localStorage
    getProximoId() {
        // getItem serve para recuperar um dado dentro do localStorage, e o que eu to recuperando é o "id" de cada cadastro e colocando na variável "proximoId"
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1; // Sempre que cadastrar um, vai somar mais +1 no "proximoId"
    }

    // Método que irá armazenar os dados cadastrados no localStorage, e pegando os dados via o objeto com o "d" dentro dos parenteses
    gravar(d) {
        
        // Colocando a função que recupera os id dentro da variável "id", para depois passar ela para dentro do localStorage
        let id = this.getProximoId();

        // Passando o primeiro parâmetro que é o nome do que vai ser armazenado, que é a chave "id"
        // E o segundo parâmetro é o que tá vindo da variável "d", que é os valores dos inputs
        // E fazendo o localStorage, que irá armazenar os dados cadastrados no servidor do navegador
        localStorage.setItem(id, JSON.stringify(d));

        // Passando o primeiro parâmetro que é o nome do que vai ser armazenado, que é a chave "id"
        // E o segundo parâmetro é o que tá vindo da variável "id", que é o método que está recuprando os "id"
        // E fazendo o localStorage, que irá armazenar os dados cadastrados no servidor do navegador
        localStorage.setItem('id', id);
    }
}

let bd = new Bd();

// Função que cadastra os valores dos inputs
function cadastrarDespesas() {

    // Pegando os valores cadastrados nos inputs no HTML
    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    // Instanciando a classe, e os valores que estão sendo pegos nos inputs, estamos passando eles para a classe "Despesas"
    let despesa = new Despesas(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    // Chamando o obj que tem o método que armazena os dados no localStorage, e passando os dados que estão no objeto de classe como parâmetro
    bd.gravar(despesa);
}