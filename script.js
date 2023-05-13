var playerScore = 0;
var computerScore = 0;

function Start(choice) {
  var playersChoice = choice.id;
  var computersChoice = GenerateChoice();

  document.getElementById("computer-choice").innerHTML = computersChoice.charAt(0).toUpperCase()+computersChoice.slice(1);

  if(playersChoice == "kő" && computersChoice == "papír" ||
      playersChoice == "papír" && computersChoice == "olló" ||
      playersChoice == "olló" && computersChoice == "kő") {
        document.getElementById("computer-score").innerHTML = parseInt(document.getElementById("computer-score").innerHTML)+1;
        document.getElementById("win-or-lose").style.color = "#D61C4E";
        document.getElementById("win-or-lose").innerHTML = "Szmitó nyer!";
      }
  else if(computersChoice == "kő" && playersChoice == "papír" ||
            computersChoice == "papír" && playersChoice == "olló" ||
            computersChoice == "olló" && playersChoice == "kő") {
              document.getElementById("player-score").innerHTML = parseInt(document.getElementById("player-score").innerHTML)+1;
              document.getElementById("win-or-lose").style.color = "#1CD6CE";
              document.getElementById("win-or-lose").innerHTML = "Játékos nyer!"
            }
  else {
    document.getElementById("win-or-lose").style.color = "#FEDB39";
    document.getElementById("win-or-lose").innerHTML = "Döntetlen!";
  }
}

function GenerateChoice() {
  return ["kő", "papír", "olló"][Math.floor(Math.random() * 3)];
}

function RestartGame() {
  document.getElementById("computer-score").innerHTML = 0;
  document.getElementById("player-score").innerHTML = 0;
  document.getElementById("computer-choice").innerHTML = "-";
  document.getElementById("win-or-lose").style.color = "white";
  document.getElementById("win-or-lose").innerHTML = "-";
}