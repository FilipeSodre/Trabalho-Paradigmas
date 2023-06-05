document.addEventListener("DOMContentLoaded", function() {
    const inputTarefa = document.querySelector(".input-criar-tarefas");
    const botaoAdicionar = document.querySelector(".botao-criar-tarefas");
    const containerTarefas = document.querySelector(".container-tarefas");
  
   // função para oque o botão adicionar irá fazer
    botaoAdicionar.addEventListener("click", function() {
    // pega o valor do input
    const tarefa = inputTarefa.value;

  
    // cria uma variavel que irá criar a div da tarefa
    const novaTarefa = document.createElement("div");
    novaTarefa.className = "tarefa";
  
    // // cria uma variavel que irá criar o span do texto da tarefa
    const spanTarefa = document.createElement("span");
    spanTarefa.textContent = tarefa;
  
    // cria uma variavel que irá criar o botão para excluir as tarefas
    const botaoRemover = document.createElement("button");
    botaoRemover.className = "botao-remover-tarefa";
    botaoRemover.textContent = "Remover";
  
    // cria o span, botão e a div para a tarefa
    novaTarefa.appendChild(spanTarefa);
    novaTarefa.appendChild(botaoRemover);
    containerTarefas.appendChild(novaTarefa);
  
    // limpa o input
    inputTarefa.value = "";
  });
  
    containerTarefas.addEventListener("click", function(event) {
    // remove a div da tarefa
    const tarefa = event.target.parentNode;
    containerTarefas.removeChild(tarefa);
    });
  });
  
  
