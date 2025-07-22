async function carregarDados() {
  try {
    const resposta = await fetch('dados.json');
    if (!resposta.ok) throw new Error('Erro ao carregar os dados.');

    const dados = await resposta.json();

    document.getElementById('nome').textContent = dados.nome;
    document.getElementById('usuario').textContent = dados.usuario;
    document.getElementById('repositorios').textContent = dados.repositorios;
    document.getElementById('seguidores').textContent = dados.seguidores;
    document.getElementById('seguindo').textContent = dados.seguindo;
    document.getElementById('avatar').src = dados.avatar;
    document.getElementById('perfil-link').href = dados.perfil;

  } catch (erro) {
    console.error('Erro:', erro);
    alert('Erro ao carregar perfil.');
  }
}

document.addEventListener('DOMContentLoaded', carregarDados);
