document.addEventListener("DOMContentLoaded", function () {
    // Selecionando elementos do DOM
    const resultado = document.querySelector(".resultado");
    const botoes = document.querySelector(".botoes");
  
    let expressao = ""; // Variável para armazenar a expressão
  
    // Adicionando evento de clique aos botões
    botoes.addEventListener("click", function (event) {
      const elementoClicado = event.target;
  
      // Verificando o tipo de botão clicado
      if (elementoClicado.tagName === "BUTTON") {
        const valorBotao = elementoClicado.textContent;
  
        // Verificando se é um botão de operação
        if (["+", "-", "X", "&#247;"].includes(valorBotao)) {
          if (expressao === "" || expressao.slice(-1) === "+" || expressao.slice(-1) === "-" || expressao.slice(-1) === "X" || expressao.slice(-1) === "÷") {
            // Evita adicionar operadores consecutivos
            return;
          }
          expressao += valorBotao.replace("X", "*").replace("&#247;", "/");
        } else if (valorBotao === "=") {
          try {
            // Avaliando a expressão e atualizando o resultado
            const resultadoExpressao = eval(expressao);
            expressao = resultadoExpressao.toString();
            resultado.textContent = expressao;
          } catch (error) {
            expressao = "Erro";
            resultado.textContent = expressao;
          }
        } else if (valorBotao === "CE") {
          // Limpar a expressão
          expressao = "";
          resultado.textContent = expressao;
        } else {
          // Adicionar número ou sinal de negativo à expressão
          expressao += valorBotao;
          resultado.textContent = expressao;
        }
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {

    const resultado = document.querySelector(".resultado");
    const botoes = document.querySelector(".botoes");
  
    let expressao = ""; 
  
   
    botoes.addEventListener("click", function (event) {
      const elementoClicado = event.target;
  
      
  
      
      if (expressao.length > 25) {
        resultado.classList.add("texto-longo");
      } else {
        resultado.classList.remove("texto-longo");
      }
    });
  });
  


  