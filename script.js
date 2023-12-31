document.addEventListener('DOMContentLoaded', function() {
    const simulateButton = document.getElementById('simulate-button');
    const drawOneButton = document.getElementById('draw-one-button');
    const resetButton = document.getElementById('reset-button');
    const drawResults = document.getElementById('draw-results');
  
    let groups = {};
    let currentGroupIndex = 0;
  
    simulateButton.addEventListener('click', simulateDraw);
    drawOneButton.addEventListener('click', drawOneTeam);
    resetButton.addEventListener('click', resetDraw);
  
    function simulateDraw() {
      drawResults.innerHTML = '';
  
      const pot_1 = [
        { "team": "Manchester City", "coef": 145.000, "country": "Eng" },
        { "team": "Sevilla", "coef": 91.000, "country": "Esp" },
        { "team": "FC Barcelona", "coef": 98.000, "country": "Esp" },
        { "team": "Napoli", "coef": 81.000, "country": "Ita" },
        { "team": "Bayern Munchen", "coef": 136.000, "country": "Ger" },
        { "team": "Paris Saint-Germain", "coef": 112.000, "country": "Fra" },
        { "team": "Benfica", "coef": 82.000, "country": "Por" },
        { "team": "Feyenoord", "coef": 51.000, "country": "Ned" }
      ];
  
      const pot_2 = [
        { "team": "Real Madrid", "coef": 121.000, "country": "Esp" },
        { "team": "Manchester United", "coef": 104.000, "country": "Eng" },
        { "team": "Internazionale", "coef": 96.000, "country": "Ita" },
        { "team": "Borussia Dortmund", "coef": 86.000, "country": "Ger" },
        { "team": "Atletico Madrid", "coef": 85.000, "country": "Esp" },
        { "team": "RB Leipzig", "coef": 84.000, "country": "Ger" },
        { "team": "FC Porto", "coef": 81.000, "country": "Por" },
        { "team": "Arsenal", "coef": 76.000, "country": "Eng" }
      ];
  
      const pot_3 = [
        { "team": "Shakhtar Donetsk", "coef": 63.000, "country": "Ukr" },
        { "team": "FC Salzburg", "coef": 59.000, "country": "Aut" },
        { "team": "Dinamo Zagreb", "coef": 55.000, "country": "Cro" },
        { "team": "Glasgow Rangers", "coef": 54.000, "country": "Sco" },
        { "team": "AC Milan", "coef": 50.000, "country": "Ita" },
        { "team": "Sporting Braga", "coef": 44.000, "country": "Por" },
        { "team": "Lazio", "coef": 42.000, "country": "Ita" },
        { "team": "Red Star Belgrade", "coef": 42.000, "country": "Srb" }
      ];
  
      const pot_4 = [
        { "team": "FC Kobenhavn", "coef": 40.500, "country": "Den" },
        { "team": "Young Boys", "coef": 34.500, "country": "Sui" },
        { "team": "Real Sociedad", "coef": 33.000, "country": "Esp" },
        { "team": "Galatasaray", "coef": 31.500, "country": "Tur" },
        { "team": "Celtic", "coef": 31.000, "country": "Sco" },
        { "team": "Newcastle United", "coef": 21.914, "country": "Eng" },
        { "team": "Union Berlin", "coef": 17.000, "country": "Ger" },
        { "team": "RC Lens", "coef": 12.232, "country": "Fra" }
      ];
  
      function assignColor(groupNumber) {
        return groupNumber < 5 ? "red" : "blue";
      }
  
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
  
      groups = {};
      const potGroups = [pot_1, pot_2, pot_3, pot_4];
      const groupColors = ["red", "red", "red", "red", "blue", "blue", "blue", "blue"];
      const groupNames = ["Group A", "Group B", "Group C", "Group D", "GroupE", "Group F", "Group G", "Group H"];
      const assignedTeams = [];
  
      for (let i = 0; i < potGroups.length; i++) {
        shuffleArray(potGroups[i]);
      }
  
      for (let j = 0; j < groupNames.length; j++) {
        const groupTeams = [];
  
        for (let k = 0; k < potGroups.length; k++) {
          for (let l = 0; l < potGroups[k].length; l++) {
            const team = potGroups[k][l];
  
            if (!assignedTeams.includes(team.team)) {
              groupTeams.push(team);
              assignedTeams.push(team.team);
              break;
            }
          }
        }
  
        groups[groupNames[j]] = {
          color: groupColors[j],
          teams: groupTeams
        };
      }
  
      displayResults(groups);
    }
  
    function displayResults(groups) {
      const drawResults = document.getElementById('draw-results');
      drawResults.innerHTML = '';
  
      const table = document.createElement('table');
      table.classList.add('draw-table');
  
      // Create table headers
      const headersRow = document.createElement('tr');
      const headers = ['Group', 'Color', 'Teams'];
      headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headersRow.appendChild(header);
      });
      table.appendChild(headersRow);
  
      // Create table rows for each group
      for (const group in groups) {
        if (groups.hasOwnProperty(group)) {
          const groupData = groups[group];
          const teams = groupData.teams.map(team => team.team).join(', ');
          const color = groupData.color;
  
          const groupRow = document.createElement('tr');
  
          const groupCell = document.createElement('td');
          groupCell.textContent = group;
          groupRow.appendChild(groupCell);
  
          const colorCell = document.createElement('td');
          colorCell.textContent = color;
          groupRow.appendChild(colorCell);
  
          const teamsCell = document.createElement('td');
          teamsCell.textContent = teams;
          groupRow.appendChild(teamsCell);
  
          table.appendChild(groupRow);
        }
      }
  
      drawResults.appendChild(table);
    }
  
    function drawOneTeam() {
      const group = groupNames[currentGroupIndex];
      const groupData = groups[group];
      const potGroup = potGroups[currentGroupIndex];
  
      if (groupData.teams.length === potGroup.length) {
        currentGroupIndex++;
        if (currentGroupIndex === groupNames.length) {
          drawOneButton.disabled = true;
          return;
        }
      }
  
      const remainingTeams = potGroup.filter(team => !groupData.teams.includes(team));
      const randomIndex = Math.floor(Math.random() * remainingTeams.length);
      const team = remainingTeams[randomIndex];
  
      groupData.teams.push(team);
  
      const teamRow = document.createElement('tr');
      const groupCell = document.createElement('td');
      groupCell.textContent = group;
      const colorCell = document.createElement('td');
      colorCell.textContent = groupData.color;
      const teamCell = document.createElement('td');
      teamCell.textContent = team.team;
  
      teamRow.appendChild(groupCell);
      teamRow.appendChild(colorCell);
      teamRow.appendChild(teamCell);
  
      const table = document.querySelector('.draw-table');
      table.appendChild(teamRow);
    }
  
    function resetDraw() {
      drawResults.innerHTML = '';
      currentGroupIndex = 0;
      drawOneButton.disabled = false;
    }
  });
  