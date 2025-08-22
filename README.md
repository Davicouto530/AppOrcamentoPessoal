# App de Orçamento Pessoal

Um aplicativo simples de **controle financeiro pessoal** que permite cadastrar despesas, consultar registros e visualizar o total gasto por categoria.  

---

## 💡 Funcionalidades

- Cadastro de despesas com informações de **data, tipo, descrição e valor**.  
- Validação dos campos obrigatórios antes de salvar os dados.  
- Consulta de despesas cadastradas, com possibilidade de filtrar por qualquer campo.  
- Visualização do **total gasto por tipo de despesa** (Alimentação, Educação, Lazer, Saúde e Transporte).  
- Remoção de despesas individuais.  
- Armazenamento local dos dados utilizando **LocalStorage**, garantindo persistência no navegador.  

---

## 🛠 Tecnologias Utilizadas

- **HTML** – Estrutura das páginas.  
- **CSS/Bootstrap** – Estilização e layout responsivo.  
- **JavaScript** – Lógica de cadastro, validação, pesquisa, remoção e cálculo de totais.  
- **jQuery** – Manipulação de modais e interações dinâmicas.  
- **LocalStorage** – Armazenamento local dos dados.  

---

## 🗂 Estrutura do Código

- **Classe `Despesas`** – Representa uma despesa, com atributos (`ano`, `mes`, `dia`, `tipo`, `descricao`, `valor`) e método `validarDados()` para garantir que todos os campos estejam preenchidos.  
- **Classe `Bd`** – Lógica de armazenamento, recuperação, pesquisa e remoção de despesas do LocalStorage.  
- **Funções principais**:  
  - `cadastrarDespesas()` – Registra uma nova despesa.  
  - `carregaListaDespesas(despesas, filtro)` – Lista todas ou despesas filtradas na tabela.  
  - `pesquisarDespesa()` – Filtra as despesas de acordo com os campos preenchidos.  
  - `carregaTotalDespesas(despesas)` – Calcula e exibe o total de cada tipo de despesa.  

---
