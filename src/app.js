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

    console.log(despesa)
}