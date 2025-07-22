const url = "https://api.github.com/users/MateusValentim-Web";

fetch(url)
  .then(response => response.json())
  .then(dados => {
    document.getElementById("nome").textContent = dados.name;
    document.getElementById("usuario").textContent = dados.login;
    document.getElementById("repositorios").textContent = dados.public_repos;
    document.getElementById("seguidores").textContent = dados.followers;
  })
  .catch(error => console.error("Erro ao buscar dados:", error));
