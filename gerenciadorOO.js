class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
    }
  
    criarElemento() {
      // cria uma div
      const novaTarefa = document.createElement("div");
      novaTarefa.className = "tarefa";
  
      // cria um span para a tarefa
      const spanTarefa = document.createElement("span");
      spanTarefa.textContent = this.descricao;
  
      // cria um botão para remover a tarefa
      const botaoRemover = document.createElement("button");
      botaoRemover.className = "botao-remover-tarefa";
      botaoRemover.textContent = "Remover";
  
       // adiciona o span e o botão 
      novaTarefa.appendChild(spanTarefa);
      novaTarefa.appendChild(botaoRemover);
  
      return novaTarefa;
    }
  }
  
  class ListaTarefas {
    constructor() {
      this.inputTarefa = document.querySelector(".input-criar-tarefas");
      this.botaoAdicionar = document.querySelector(".botao-criar-tarefas");
      this.containerTarefas = document.querySelector(".container-tarefas");
  
      // adiciona um evento ao clicar no botão Adicionar
      this.botaoAdicionar.addEventListener("click", this.adicionarTarefa.bind(this));
  
      // adiciona um evento ao clicar no botão Remover
      this.containerTarefas.addEventListener("click", this.removerTarefa.bind(this));
    }
  
    adicionarTarefa() {
      // pega a tarefa com o valor do input
      const descricaoTarefa = this.inputTarefa.value;
  
      // cria uma nova instância da classe tarefa 
      const tarefa = new Tarefa(descricaoTarefa);
  
      // cria a div e o botão de remover
      const novaTarefaElemento = tarefa.criarElemento();
  
      // coloca o texto da tarefa na div
      this.containerTarefas.appendChild(novaTarefaElemento);
  
      // limpa o input
      this.limparInput();
    }
  
    removerTarefa(event) {
      // pega a div do botão apertado
      const tarefa = event.target.parentNode;
  
      // remove a div da tarefa
      this.containerTarefas.removeChild(tarefa);
    }
  
    limparInput() {
      // limpa o input
      this.inputTarefa.value = "";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // cria uma nova instância da classe ListaTarefas
    new ListaTarefas();
  });
  
    
  