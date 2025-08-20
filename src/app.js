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
        // Definindo os atributos da classe, e atribuindo os valores que estão sendo recebidos como parâmetros
    }

    // Método que valida se os dados dos inputs foram preenchidos ou não
    validarDados() {

        // Percorrendo todos os atributos do obj "Despesa" para verificar se todos estão preenchidos.
        // O "i" acessa todos os atributos do obj e o "this" faz referência ao próprio obj "Despesa"
        for (let i in this) {

            // Passando e verificando se os atributos que estão dentro do obj são "undefined", vazio ou "null", que indica que não foram preenchidos
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false; // Se for verdadeiro qualquer uma das coisas acima, vai retornar "false"
            }
        }

        return true;
        // Se não for verdadeira nenhuma das verificações acima, vai retornar "true" lá para verificação na função "cadastrarDespesas" aonde está sendo chamado o método
    }
}

// Classe que fará a lógica de ir armazenando todos os cadastrados e não substituindo os que já estão cadastrados
class Bd {

    constructor() {
        // Verificando se existe um id no localStorage
        let id = localStorage.getItem('id');

        // Se "id" for igual a "null"
        if (id === null) {
            localStorage.setItem('id', 0);
            // Ele inicia o id como 0 caso não exista nenhum cadastro ainda
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
        // E fazendo o localStorage armazenar os dados cadastrados no navegador
        localStorage.setItem(id, JSON.stringify(d));

        // Passando o primeiro parâmetro que é o nome do que vai ser armazenado, que é a chave "id"
        // E o segundo parâmetro é o que tá vindo da variável "id", que é o método que está recuprando os "id"
        // E fazendo o localStorage armazenar os dados cadastrados no navegador
        localStorage.setItem('id', id);
    }

    // Método que recupera todos os registros cadastrados
    recuperarTodosRegistros() {

        // Array que armazenará as despesas
        let despesas = [];

        // Recuperando o "id" dos valores com o "getItem" que estão sendo armazenados no "localStorage"
        let id = localStorage.getItem('id');

        // Recuperando todas as despesas cadastradas em localStorage
        // Percorrendo os id do localStorage, enquando "i" for menor ou igual ao tantos de "ids" que tem lá, vai percorrer 
        for (let i = 1; i <= id; i++) {

            // Recuperando os valores das despesas, que estão indo tudo para o "i"
            // E convertendo para obj literal com "JSON.parse"
            let despesa = JSON.parse(localStorage.getItem(i));

            // Verificando se existe a possibilidade de haver indices que foram pulados/removidos.
            // Nestes casos nós vamos pular esses indices.
            if (despesa === null) {
                continue;
                // Se despesa for igual a null, pula para a proxima interação do laço e continua antes que o push daquela despesa seja realizado
            }

            // Implementando um atributo novo "id" dentro do obj de despesa e o valor desse atributo é de "i", que percorre cada elemento do obj e vai colocando o valor no atributo.
            despesa.id = i;

            // Adicionando e armazenando no array "despesas" os valores cadastrados que estão em "despesa"
            despesas.push(despesa);
        }

        return despesas;
        // Retornando para a chamada do método todas as despesas que foram armazenadas no array "despesas"
    }

    // Método que pesquisa as despesas
    pesquisar(despesa) {

        // Criando um array que irá armazenar todos os registros, para depois pesquisar
        let despesasFiltradas = [];

        // Chamando o método que recupera todos os registro cadastrados e colocando dentro do array
        despesasFiltradas = this.recuperarTodosRegistros();

        console.log(despesa);

        console.log(despesasFiltradas);

        // Aplicando o filtro para: ano, mes, dia tipo, descricao, valor

        // ANO
        // Verificando se o input ".ano" é diferente de vazio, se for, irá executar o bloco de dentro
        if (despesa.ano != '') {
            console.log('filtro de ano');
            // Colocando o valor atualizado do filter dentro do array de novo. O parâmetro "d" percorre todos os atributos do objeto, e estamos verificando se o atributo ".ano" é igual ao atributo ".ano" que vem de despesa, se "d.ano" for igual á "despesa.ano" que vem do input, irá retornar "true", se não, irá retornar "false"
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        // MÊS
        if (despesa.mes != '') {
            console.log('filtro de mes');
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        // DIA
        if (despesa.dia != '') {
            console.log('filtro de dia');
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        // TIPO
        if (despesa.tipo != '') {
            console.log('filtro de tipo');
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }

        // DESCRICAO
        if (despesa.descricao != '') {
            console.log('filtro de descricao');
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        // VALOR
        if (despesa.valor != '') {
            console.log('filtro de valor');
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        // Devolvendo o array "despesasFiltradas" para quem faz a chamada do método
        return despesasFiltradas;
    }

    // Método que remove uma despesa da tabela
    // Recebe como parâmetro o id do objeto que será removido quando foi clicado
    remover(id) {

        // Removendo o elemento do localStorage pelo id quando for clicado
        localStorage.removeItem(id);
    }
}

// Instanciando a classe "Bd"
let bd = new Bd();

// Pegando as tags HTML que estão no modal que irão ser escritas dinâmicamente
let modal_title = document.getElementById('exampleModalLabel');
let modalBody = document.getElementById('modalBody');
let buttonVoltar = document.getElementById('buttonVoltar');

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

    // Verificando se o método que está dentro do obj "despesa" é true, se for, faz o cadastro da despesa no localStorage
    if (despesa.validarDados()) {
        // Chamando o obj que tem o método que armazena os dados no localStorage, e passando os dados que estão no objeto de classe como parâmetro
        bd.gravar(despesa);

        // Limpando os campos dos inputs depois que cadastrou 
        ano.value = '';
        mes.value = '';
        dia.value = '';
        tipo.value = '';
        descricao.value = '';
        valor.value = '';

        console.log('Dados válidos');

        // Usando jQuery 
        // Exibindo o modal de sucesso quando o usuário cadastrar as informações
        $('#modalRegistroDespesa').modal('show')

        // Escrevendo as mensagens de sucesso no modal nas tags do html quando for preenchido todos os campos
        modal_title.innerHTML = 'Registro inserido com sucesso';
        modal_title.className = 'modal-title fs-5 text-success';
        // Atribuindo as classes que já existiam na tag que estamos pegando do html, e colocando a nova classe para cor do texto "text-success" de sucesso

        modalBody.innerHTML = 'Despesa foi cadastrada com sucesso!';

        buttonVoltar.innerHTML = 'Voltar';
        buttonVoltar.className = 'btn btn-success';
        // Atribuindo as classes que já existiam na tag que estamos pegando do html, e colocando a nova classe para cor do botão "btn-success" de sucesso

    } else {
        // Se o método que verifica se os inputs estão preenchidos retornar "false", vem aqui para o "else"
        console.log('Dados inválidos');

        // Usando jQuery 
        // Exibindo o modal de erro quando o usuário tenta adicionar sem ter preenchido o formulário
        $('#modalRegistroDespesa').modal('show')

        // Escrevendo as mensagens de sucesso no modal nas tags do html quando for preenchido todos os campos
        modal_title.innerHTML = 'Erro na inclusão do registro';
        modal_title.className = 'modal-title fs-5 text-danger';
        // Atribuindo as classes que já existiam na tag que estamos pegando do html, e colocando a nova classe para cor do texto "text-danger" de erro

        modalBody.innerHTML = 'Existe campos obrigatórios que não foram preenchidos';

        buttonVoltar.innerHTML = 'Voltar e corrigir';

        buttonVoltar.className = 'btn btn-danger';
        // Atribuindo as classes que já existiam na tag que estamos pegando do html, e colocando a nova classe para cor do botão "btn-danger" de erro
    }
}

// Função que irá mostrar as despesas na página "consulta" sempre que a página for carregada, e o parâmetro "despesa" com um array que irá armazenar se for feita alguma pesquisa, e o parâmetro "filtro = flase", vem da filtragem feita na pesquisa
function carregaListaDespesas(despesas = [], filtro = false) {

    // Verificando se o array despesas é igual a 0 ou o filtro é igual a false, se for igual a 0 e false, vai apresentar todos os registros, se não, vai apresentar só os registros que foram pesquisados que estão dentro do array "despesa" que está sendo passado como parâmtro da função
    if (despesas.length == 0 && filtro == false) {
        // Chamando o método "recuperarTodosRegistros" do obj "bd" que recupera os cadastrados, e armazenando no array "despesas"
        despesas = bd.recuperarTodosRegistros();
    }

    console.log(despesas);

    // Selecionando o elemento "tbody" da tabela
    let listaDespesas = document.getElementById("listaDespesas");
    listaDespesas.innerHTML = '';
    // Limpando o tbody da lista, para quando for pesquisar algo, aparecer só o que foi pesquisado na lista, e não adicionar mais uma linha na tabela

    // Exemplo do que é
    // <tr>
    //     <td>15/03/2025</td>
    //     <td>Alimentação</td>
    //     <td>Compras do mês</td>
    //     <td>526,22</td>
    // </tr>

    // Percorrer o array despesas, listando cada despesa de forma dinâmica
    despesas.forEach((d) => {

        // Criando a linha "tr" da tabela, com o "insertRow" que cria as linhas na tabela. e colocando dentro da variável "linha", que recebe a linha criada
        let linha = listaDespesas.insertRow();

        // Criando as colunas "td" da tabela com o "insertCell" que cria as colunas na tabela dentro de "linha". Criando 4, por que vai ter 4 colunas.
        // Colocando os escritos dentro de cada coluna com o "innerHTML"
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

        // Ajustar o tipo, o tipo está vindo em números "1,2,3...", então de acordo com o número que vier, vai ser um tipo de despesa
        switch (d.tipo) {
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break
        }
        linha.insertCell(1).innerHTML = d.tipo;

        linha.insertCell(2).innerHTML = d.descricao;
        linha.insertCell(3).innerHTML = d.valor;

        // Criar botão de excluir uma despesa
        // Criando um elemento html "button" via JS
        let btn = document.createElement("button");

        // Colocando classe do bootstrap no elemento que está sendo criado
        btn.className = 'btn btn-danger';

        // Colocando um icone como conteúdo do botão
        btn.innerHTML = '<i class="fas fa-times"></i>';

        // Estamos acessando o atributo "id" do obj despesa, e estamos associando esse "d.id" como valor do botão
        btn.id = `id_despesa_${d.id}`;

        // Adicionando no elemento do botão uma ação de "onclick", que quando clicar no botão, vai executar a função que vai remover a despesa da tabela.
        btn.onclick = function () {

            // Formatando a string que está vindo do "id" que está sendo pego antes de passar ela como parâmetro
            // O método "replace" serve para substituir uma string por outra, nesse caso a string "id_despesa_" está sendo substituida por uma string em vazio
            let id = this.id.replace('id_despesa_', '');

            // Recuperando o id do elemento que foi clicado
            // alert(id);

            // ----- Modal de quando excluir -----
            // Usando jQuery 
            // Exibindo o modal de sucesso quando o usuário excluir uma despesa
            $('#modalRegistroDespesa').modal('show')

            // Escrevendo as mensagens de sucesso no modal nas tags do html quando for excluído uma despesa
            modal_title.innerHTML = 'Registro excluído com sucesso';
            modal_title.className = 'modal-title fs-5 text-black';
            // Atribuindo as classes que já existiam na tag que estamos pegando do html, e colocando a nova classe para cor do texto "text-success"

            modalBody.innerHTML = 'Despesa foi excluída com sucesso!';

            buttonVoltar.innerHTML = 'Voltar';
            buttonVoltar.className = 'btn btn-primary';
            // Atribuindo as classes que já existiam na tag que estamos pegando do html, e colocando a nova classe para cor do botão "btn-success"

            // Chamando o método da classe "Bd" que irá remover do localStorage, e passando como parâmetro o "id" do elemento que foi clicado e que será removido.
            bd.remover(id);

            // Removendo a linha após clicar no botão e exibir o modal
            linha.remove()
        }

        // Criando uma quarta coluna na tabela e colocando dentro dela o elemento de botão que está sendo criado. 
        linha.insertCell(4).append(btn);

        console.log(d)
    })
}

// Criando a função que irá pesquisar as despesas, função colocada lá no botão no HTML
function pesquisarDespesa() {

    // Pegando os campos dos inputs
    let ano = document.getElementById('ano').value;
    let mes = document.getElementById('mes').value;
    let dia = document.getElementById('dia').value;
    let tipo = document.getElementById('tipo').value;
    let descricao = document.getElementById('descricao').value;
    let valor = document.getElementById('valor').value;

    // Instanciando a classe "Despesa" e passando os parâmetros que o "constructor" da classe espera
    let despesa = new Despesas(ano, mes, dia, tipo, descricao, valor);

    // Recuperando a instancia da classe "Bd" e executando o método "pesquisar" dela e passando os valores de "despesa"
    let despesas = bd.pesquisar(despesa);

    // Passando o array filtrado de quando alguém pesquisou algo, e passando "true" para o parâmetro "filtro" da função "carregaListaDespesas"
    this.carregaListaDespesas(despesas, true);
}

function carregaTotalDespesas(despesas = []) {

    if (despesas.length == 0) {
        // Chamando o método "recuperarTodosRegistros" do obj "bd" que recupera os cadastrados, e armazenando no array "despesas"
        despesas = bd.recuperarTodosRegistros();
    }

    // Selecionando o elemento "tbody" da tabela
    let listaTotalDespesas = document.getElementById('listaTotalDespesas');

    let totalDespesa = 0; // Variável que soma as despesas

    // Percorrer o array despesas, listando cada despesa de forma dinâmica
    despesas.forEach((d) => {

        // Criando a linha "tr" da tabela, com o "insertRow" que cria as linhas na tabela. e colocando dentro da variável "linha", que recebe a linha criada
        let linha = listaTotalDespesas.insertRow();

        // Ajustar o tipo, o tipo está vindo em números "1,2,3...", então de acordo com o número que vier, vai ser um tipo de despesa
        switch (d.tipo) {
            case '1': d.tipo = 'Alimentação'
                break
            case '2': d.tipo = 'Educação'
                break
            case '3': d.tipo = 'Lazer'
                break
            case '4': d.tipo = 'Saúde'
                break
            case '5': d.tipo = 'Transporte'
                break
        }
        linha.insertCell(0).innerHTML = d.tipo;

        // Criando as colunas "td" da tabela com o "insertCell" que cria as colunas na tabela dentro de "linha". Criando 4, por que vai ter 4 colunas.
        // Colocando os escritos dentro de cada coluna com o "innerHTML"
        linha.insertCell(1).innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

        // Somando e atribuindo os valores para dentro da variável "totalDespesas"
        totalDespesa += parseFloat(d.valor); 

        linha.insertCell(2).innerHTML = totalDespesa;

        console.log(totalDespesa)

    })
}