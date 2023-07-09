# UCL_DRAW
# Champions League Draw Simulator
This project is a web application that simulates the draw for the Champions League group stage. It randomly assigns teams from different pots to groups, following certain constraints, and displays the draw results on the web page.

# Getting Started
To use the Champions League Draw Simulator, follow these steps:

Clone the repository or download the code files.
Open the index.html file in a web browser.
# How to Use
Open the web page in a web browser after following the "Getting Started" steps.
Click the "Simulate Draw" button to initiate the draw simulation.
The draw results will be displayed below the button, showing the groups and the teams assigned to each group.
# Team Information
The team information is defined in the code for each pot. The pots are structured as follows:

Pot 1: Contains top-seeded teams.
Pot 2: Contains second-seeded teams.
Pot 3: Contains third-seeded teams.
Pot 4: Contains fourth-seeded teams.
Each team in a pot has information such as the team name, coefficient, and country.

# Functionality
The code uses JavaScript to handle the draw simulation. Here's an overview of the functionality:

When the web page is loaded, the JavaScript code waits for the DOM to be fully loaded.
After the DOM is loaded, it assigns the click event listener to the "Simulate Draw" button.
When the button is clicked, the simulateDraw() function is called.
The simulateDraw() function performs the draw simulation by assigning teams from the pots to groups, following certain constraints.
The draw results are then displayed on the web page by calling the displayResults() function.

It was inspired by  a python version of the code i created, which will be linked if you want to view that as well.
# Customization
You can customize the team information in each pot by modifying the arrays pot_1, pot_2, pot_3, and pot_4. Add or remove teams as needed, but make sure to maintain the structure and information for each team.


# Dependencies
This project does not have any external dependencies. It is built using HTML, CSS, and vanilla JavaScript.
Over time I plan on updating it to react and flask but I am still learning those right now but all updates pertaining this project will be provided.

