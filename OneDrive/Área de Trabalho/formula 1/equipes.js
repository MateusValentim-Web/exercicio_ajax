document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('lista-equipes');
    const infoContainer = document.createElement("div");
    infoContainer.id = "info-equipe";
    document.body.appendChild(infoContainer); // adiciona no final do body (ou você pode colocar em um local específico)

    const equipes = [
        {
            nome: "Red Bull Racing",
            imagem: "./imagensLogo/RedBull.png",
            historia: "Fundada pela Red Bull após a compra da Jaguar, tornou-se uma potência na F1 a partir de 2010, com múltiplos títulos com Vettel e Verstappen.",
            fundador: "Dietrich Mateschitz",
            fundacao: "2005",
            sede: "Milton Keynes, Reino Unido",
            pilotos: ["Max Verstappen", "Yuki Tsunoda"],
            maisTitulos: "Sebastian Vettel e Max Verstappen (4 títulos)",
            maisVitorias: "Max Verstappen (64)",
        },
        {
            nome: "Ferrari",
            imagem: "./imagensLogo/Ferrari.png",
            historia: "A equipe mais antiga e vitoriosa da F1, com uma herança lendária e uma base apaixonada de fãs.",
            fundador: "Enzo Ferrari",
            fundacao: "1929",
            sede: "Maranello, Itália",
            pilotos: ["Charles Leclerc", "Lewis Hamilton"],
            maisTitulos: "Michael Schumacher (5 títulos pela Ferrari)",
            maisVitorias: "Michael Schumacher (72)",
        },
        {
            nome: "Mercedes",
            imagem: "./imagensLogo/Mercedes.png",
            historia: "Dominou a era híbrida da F1 com Hamilton, vencendo 8 títulos consecutivos de construtores entre 2014 e 2021.",
            fundador: "Carl Benz",
            fundacao: "1954 / Retorno em 2010",
            sede: "Stuttgart, Alemanha",
            pilotos: ["George Russell", "Andrea Kimi Antonelli"],
            maisTitulos: "Lewis Hamilton (6 títulos com a Mercedes)",
            maisVitorias: "Lewis Hamilton (84)",
        },
        {
            nome: "McLaren",
            imagem: "./imagensLogo/McLaren.png",
            historia: "Uma das equipes mais tradicionais da F1, famosa por suas lutas com Ferrari e por seus lendários pilotos.",
            fundador: "Bruce McLaren",
            fundacao: "1963",
            sede: "Woking, Reino Unido",
            pilotos: ["Lando Norris", "Oscar Piastri"],
            maisTitulos: "Ayrton Senna (3 títulos pela McLaren)",
            maisVitorias: "Alain Prost (30)",
        },
        {
            nome: "Aston Martin",
            imagem: "./imagensLogo/Astonmartin.png",
            historia: "Renascida a partir da Racing Point, busca consolidar-se como uma potência com investimentos de Lawrence Stroll.",
            fundador: "Lionel Martin e Robert Bamford",
            fundacao: "2021 (como Aston Martin F1)",
            sede: "Silverstone, Reino Unido.",
            pilotos: ["Fernando Alonso", "Lance Stroll"],
            maisTitulos: "Nenhum título mundial ainda",
            maisVitorias: "Nenhuma vitória até 2025",
        },
        {
            nome: "Alpine",
            imagem: "./imagensLogo/Alpine.png",
            historia: "Substituiu a Renault como equipe oficial da marca francesa na F1, mantendo a tradição.",
            fundador: "Renault (marca Alpine)",
            fundacao: "2021 (como Alpine F1 Team)",
            sede: "Oxfordshire, Reino Unido",
            pilotos: ["Pierre Gasly", "Jack Doohan"],
            maisTitulos: "Fernando Alonso (2 títulos com Renault)",
            maisVitorias: "Fernando Alonso (17)",
        },
        {
            nome: "Racing Bulls",
            imagem: "./imagensLogo/Racingbulls.png",
            historia: "Equipe satélite da Red Bull que serve como base para novos talentos.",
            fundador: "Dietrich Mateschitz",
            fundacao: "2006 (como Toro Rosso), rebatizada em 2024",
            sede: "Milton Keynes, Reino Unido",
            pilotos: ["Liam Lawson", "Isack Hadjar"],
            maisTitulos: "Nenhum título mundial ainda",
            maisVitorias: "Nenhuma vitória até 2025",
        },
        {
            nome: "Sauber (Stake F1 Team)",
            imagem: "./imagensLogo/Sauber.png",
            historia: "Equipe suíça tradicional que passou por parcerias com BMW e Alfa Romeo, agora renomeada para Stake F1.",
            fundador: "Peter Sauber",
            fundacao: "1993",
            sede: "Hinwil, Suíça",
            pilotos: ["Nico Hulkenberg", "Gabriel Bortoleto"],
            maisTitulos: "Nenhum título mundial ainda",
            maisVitorias: "Nenhuma vitória até 2025",
        },
        {
            nome: "Haas",
            imagem: "./imagensLogo/Haas.png",
            historia: "Equipe americana que entrou na F1 em 2016, conhecida por sua colaboração com a Ferrari.",
            fundador: "Gene Haas",
            fundacao: "2016",
            sede: "Carolina do Norte, EUA",
            pilotos: ["Esteban Ocon", "Oliver Bearman"],
            maisTitulos: "Nenhum título mundial ainda",
            maisVitorias: "Nenhuma vitória até 2025",
        },
        {
            nome: "Williams",
            imagem: "./imagensLogo/Williams.png",
            historia: "Uma das grandes da F1, com 9 títulos de construtores, mas que enfrenta desafios nos últimos anos.",
            fundador: "Frank Williams",
            fundacao: "1977",
            sede: "Oxfordshire, Reino Unido",
            pilotos: ["Alexander Albon", "Carlos Sainz"],
            maisTitulos: "Nigel Mansell / Alain Prost",
            maisVitorias: "Nigel Mansell (31)",
        },
    ];

    container.innerHTML = "";

    equipes.forEach(equipe => {
        const card = document.createElement("div");
        card.classList.add("card-equipe");
        card.innerHTML = `
            <img src="${equipe.imagem}" alt="${equipe.nome}">
            <h3>${equipe.nome}</h3>
        `;

        card.addEventListener("click", () => {
            infoContainer.innerHTML = `
                <h2>${equipe.nome}</h2>
                <p><strong>Fundador:</strong> ${equipe.fundador}</p>
                <p><strong>Fundação:</strong> ${equipe.fundacao}</p>
                <p><strong>Sede:</strong> ${equipe.sede}</p>
                <p><strong>Pilotos 2025:</strong> ${equipe.pilotos.join(", ")}</p>
                <p><strong>Piloto com mais títulos:</strong> ${equipe.maisTitulos}</p>
                <p><strong>Piloto com mais vitórias:</strong> ${equipe.maisVitorias}</p>
                <p><strong>História:</strong> ${equipe.historia}</p>
            `;
            infoContainer.scrollIntoView({ behavior: "smooth" });
        });

        container.appendChild(card);
    });
});
