document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('lista-pilotos');
    const secaoPilotos = document.getElementById('pilotos');

    const pilotos = [
        { nome: 'Max Verstappen', nacionalidade: 'Holandesa', numero: 1, imagem: 'verstappen.avif' },
        { nome: 'Yuki Tsunoda', nacionalidade: 'Japonesa', numero: 22, imagem: 'tsunoda.avif' },
        { nome: 'Liam Lawson', nacionalidade: 'Neozelandês', numero: 30, imagem: 'lawson.avif' },
        { nome: 'Isack Hadjar', nacionalidade: 'Francesa', numero: 6, imagem: 'hadjar.avif' },
        { nome: 'Charles Leclerc', nacionalidade: 'Monegasca', numero: 16, imagem: 'leclerc.avif' },
        { nome: 'Lewis Hamilton', nacionalidade: 'Britânica', numero: 44, imagem: 'hamilton.avif' },
        { nome: 'Carlos Sainz', nacionalidade: 'Espanhola', numero: 55, imagem: 'sainz.avif' },
        { nome: 'Alex Albon', nacionalidade: 'Tailandesa', numero: 23, imagem: 'albon.avif' },
        { nome: 'George Russell', nacionalidade: 'Britânica', numero: 63, imagem: 'russell.avif' },
        { nome: 'Andrea Kimi Antonelli', nacionalidade: 'Italiano', numero: 12, imagem: 'antonelli.avif' },
        { nome: 'Lando Norris', nacionalidade: 'Britânica', numero: 4, imagem: 'norris.avif' },
        { nome: 'Oscar Piastri', nacionalidade: 'Australiana', numero: 81, imagem: 'piastri.avif' },
        { nome: 'Fernando Alonso', nacionalidade: 'Espanhola', numero: 14, imagem: 'alonso.avif' },
        { nome: 'Lance Stroll', nacionalidade: 'Canadense', numero: 18, imagem: 'stroll.avif' },
        { nome: 'Pierre Gasly', nacionalidade: 'Francesa', numero: 10, imagem: 'gasly.avif' },
        { nome: 'Jack Doohan', nacionalidade: 'Australiana', numero: 7, imagem: 'doohan.avif' },
        { nome: 'Esteban Ocon', nacionalidade: 'Francesa', numero: 31, imagem: 'ocon.avif' },
        { nome: 'Oliver Bearman', nacionalidade: 'Britânica', numero: 87, imagem: 'bearman.avif' },
        { nome: 'Gabriel Bortoleto', nacionalidade: 'Brasileira', numero: 5, imagem: 'bortoleto.avif' },
        { nome: 'Nico Hülkenberg', nacionalidade: 'Alemã', numero: 27, imagem: 'hulkenberg.avif' },
    ];

    container.innerHTML = '';

    pilotos.forEach(piloto => {
        container.innerHTML += `
        <div class="piloto-card">
            <img src="./imagensPilotos/${piloto.imagem || 'default.jpg'}" alt="${piloto.nome}">
            <div class="info-piloto">
                <h3>${piloto.nome}</h3>
                <p><strong>Nacionalidade:</strong> ${piloto.nacionalidade}</p>
                <p><strong>Número:</strong> ${piloto.numero}</p>
            </div>
        </div>
        `;
    });

    // Scroll suave para a seção ao clicar em "Pilotos"
    const linkPilotos = document.querySelector('a[href="#pilotos"]');
    if (linkPilotos) {
        linkPilotos.addEventListener('click', function (e) {
            e.preventDefault();
            secaoPilotos.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
