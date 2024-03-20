let initialYesButtonPosition = {}; // Armazena as coordenadas iniciais do botão "Sim"

function transformButton(button) {
  button.textContent = ":Confirmado então";
  button.style.backgroundColor = "lightgreen";
  button.disabled = true; // Impede cliques adicionais
  
  // Esconde o botão "Não"
  const noButton = document.getElementById("noButton");
  noButton.style.display = "none";
}

function moveButton() {
  const button = document.getElementById("noButton");
  const randomX = Math.random() * (window.innerWidth - 100); // Limita para não sair da tela
  const randomY = Math.random() * (window.innerHeight - 50);
  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";

  // Atualiza a posição do botão "Sim" apenas na primeira vez que o botão "Não" for clicado
  if (Object.keys(initialYesButtonPosition).length === 0) {
    const yesButton = document.getElementById("yesButton");
    initialYesButtonPosition.left = yesButton.offsetLeft + "px";
    initialYesButtonPosition.top = yesButton.offsetTop + "px";
  }
}

// Função para resetar a posição do botão "Sim" para sua posição inicial
function resetYesButtonPosition() {
  const yesButton = document.getElementById("yesButton");
  yesButton.style.position = "absolute";
  yesButton.style.left = initialYesButtonPosition.left;
  yesButton.style.top = initialYesButtonPosition.top;
}

function transformButton(button) {
    button.textContent = ":3";
    button.style.backgroundColor = "lightgreen";
    button.disabled = true; // Impede cliques adicionais
    
    // Esconde o botão "Não"
    const noButton = document.getElementById("noButton");
    noButton.style.display = "none";
  
    // Reseta a posição do botão "Sim" para sua posição inicial
    resetYesButtonPosition();
  }
