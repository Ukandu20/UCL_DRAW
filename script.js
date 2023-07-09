document.addEventListener('DOMContentLoaded', function() {
    const simulateButton = document.getElementById('simulate-button');
    const drawResults = document.getElementById('draw-results');
  
    simulateButton.addEventListener('click', simulateDraw);
  
    function simulateDraw() {
      drawResults.innerHTML = '';
  
      const pot_1 = [
        { "team": "Manchester City", "coef": 145.000, "country": "Eng" },
        { "team": "Sevilla", "coef": 91.000, "country": "Esp" },
        { "team": "FC Barcelona", "coef": 98.000, "country": "Esp" },
        { "team": "Napoli", "coef": 81.000, "country": "Ita" },
        { "team": "Bayern München", "coef": 136.000, "country": "Ger" },
        { "team": "Paris Saint-Germain", "coef": 112.000, "country": "Fra" },
        { "team": "Benfica", "coef": 82.000, "country": "Por" },
        { "team": "Feyenoord", "coef": 51.000, "country": "Ned" }
      ];
  
      const pot_2 = [
        { "team": "Real Madrid", "coef": 121.000, "country": "Esp" },
        { "team": "Manchester United", "coef": 104.000, "country": "Eng" },
        { "team": "Internazionale", "coef": 96.000, "country": "Ita" },
        { "team": "Borussia Dortmund", "coef": 86.000, "country": "Ger" },
        { "team": "Atlético Madrid", "coef": 85.000, "country": "Esp" },
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
        { "team": "FC København", "coef": 40.500, "country": "Den" },
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
  
      const groups = {};
      const potGroups = [pot_1, pot_2, pot_3, pot_4];
      const groupColors = ["red", "red", "red", "red", "blue", "blue", "blue", "blue"];
      const groupNames = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F", "Group G", "Group H"];
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
      for (const group in groups) {
        if (groups.hasOwnProperty(group)) {
          const groupData = groups[group];
          const teams = groupData.teams.map(team => team.team).join(', ');
          const color = groupData.color;
          const groupElement = document.createElement('div');
          groupElement.innerHTML = `${group} (${color}): ${teams}`;
          drawResults.appendChild(groupElement);
        }
      }
    }
  });
  