const url = "https://api.github.com/users/MateusValentim-Web";

fetch(url)
  .then(response => response.json())
  .then(dados => {
    document.getElementById("avatar").src = dados.avatar_url;
    document.getElementById("nome").textContent = dados.name;
    document.getElementById("usuario").textContent = "@" + dados.login;
    document.getElementById("repositorios").textContent = dados.public_repos;
    document.getElementById("seguidores").textContent = dados.followers;
    document.getElementById("seguindo").textContent = dados.following;
    document.getElementById("link").href = dados.html_url;
  })
  .catch(error => console.error("Erro ao buscar dados:", error));
