fetch('https://ergast.com/api/f1/current.json')
    .then(response => response.json())
    .then(data => {
        const races = data.MRData.RaceTable.Races;
        let calendarHTML = '<table border="1"><tr><th>Data</th><th>Hora</th><th>GP</th><th>Circuito</th></tr>';

        races.forEach(race => {
            calendarHTML += `
            <tr>
                <td>${race.date}</td>
                <td>${race.time ? race.time : 'A definir'}</td>
                <td>${race.raceName}</td>
                <td>${race.Circuit.circuitName}</td>
            </tr>
            `;
        });

        calendarHTML += '</table>';
        document.getElementById('calendario').innerHTML = calendarHTML;
    })
    .catch(error => console.error('Erro ao buscar os dados:', error));


