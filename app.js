// Note: This project could have been approached using one of two major techniques.
//       The first would be to play out each move and give each move a score so 
//       that losing moves could be avoided. That would be a slick solution. It
//       would also take awhile to code. Another solution is a brute force method 
//       that just maps out the best moves by hand. This solution isn't as slick, 
//       but much faster to code for TicTacToe. Getting a project done quickly
//       often has a major value as well, so I went with the brute force solution.

var endGame = {c1p2c5p3c9:"WIN",c1p2c5p4c9:"WIN",c1p2c5p6c9:"WIN",c1p2c5p7c9:"WIN",c1p2c5p8c9:"WIN",c1p2c5p9c7p3c4:"WIN",c1p2c5p9c7p4c3:"WIN",c1p2c5p9c7p6c3:"WIN",c1p2c5p9c7p8c3:"WIN",c1p4c5p2c9:"WIN",c1p4c5p3c9:"WIN",c1p4c5p6c9:"WIN",c1p4c5p7c9:"WIN",c1p4c5p8c9:"WIN",c1p4c5p9c3p2c7:"WIN",c1p4c5p9c3p6c2:"WIN",c1p4c5p9c3p7c2:"WIN",c1p4c5p9c3p8c2:"WIN",c1p6c5p2c9:"WIN",c1p6c5p3c9:"WIN",c1p6c5p4c9:"WIN",c1p6c5p7c9:"WIN",c1p6c5p8c9:"WIN",c1p6c5p9c3p2c7:"WIN",c1p6c5p9c3p4c2:"WIN",c1p6c5p9c3p7c2:"WIN",c1p6c5p9c3p8c2:"WIN",c1p8c5p2c9:"WIN",c1p8c5p3c9:"WIN",c1p8c5p4c9:"WIN",c1p8c5p6c9:"WIN",c1p8c5p7c9:"WIN",c1p8c5p9c7p2c4:"WIN",c1p8c5p9c7p3c4:"WIN",c1p8c5p9c7p4c3:"WIN",c1p8c5p9c7p6c4:"WIN",c1p3c5p2c9:"WIN",c1p3c5p4c9:"WIN",c1p3c5p6c9:"WIN",c1p3c5p7c9:"WIN",c1p3c5p8c9:"WIN",c1p3c5p9c6p2c4:"WIN",c1p3c5p9c6p4c2p7c8:"WIN",c1p3c5p9c6p4c2p8c7:"DRAW",c1p3c5p9c6p7c4:"WIN",c1p3c5p9c6p8c4:"WIN",c1p7c5p2c9:"WIN",c1p7c5p3c9:"WIN",c1p7c5p4c9:"WIN",c1p7c5p6c9:"WIN",c1p7c5p8c9:"WIN",c1p7c5p9c8p2c4p3c6:"WIN",c1p7c5p9c8p2c4p6c3:"DRAW",c1p7c5p9c8p3c2:"WIN",c1p7c5p9c8p4c2:"WIN",c1p7c5p9c8p6c2:"WIN",c1p9c5p2c7p3c4:"WIN",c1p9c5p2c7p4c3:"WIN",c1p9c5p2c7p6c3:"WIN",c1p9c5p2c7p8c3:"WIN",c1p9c5p3c6p2c4:"WIN",c1p9c5p3c6p4c2p7c8:"WIN",c1p9c5p3c6p4c2p8c7:"DRAW",c1p9c5p3c6p7c4:"WIN",c1p9c5p3c6p8c4:"WIN",c1p9c5p4c3p2c7:"WIN",c1p9c5p4c3p6c2:"WIN",c1p9c5p4c3p7c2:"WIN",c1p9c5p4c3p8c2:"WIN",c1p9c5p6c3p2c7:"WIN",c1p9c5p6c3p4c2:"WIN",c1p9c5p6c3p7c2:"WIN",c1p9c5p6c3p8c2:"WIN",c1p9c5p7c8p2c4p3c6:"WIN",c1p9c5p7c8p2c4p6c3:"DRAW",c1p9c5p7c8p3c2:"WIN",c1p9c5p7c8p4c2:"WIN",c1p9c5p7c8p6c2:"WIN",c1p9c5p8c7p2c3:"WIN",c1p9c5p8c7p3c4:"WIN",c1p9c5p8c7p4c3:"WIN",c1p9c5p8c7p6c3:"WIN",c1p5c9p2c8p3c7:"WIN",c1p5c9p2c8p4c7:"WIN",c1p5c9p2c8p6c7:"WIN",c1p5c9p2c8p7c3p4c6:"WIN",c1p5c9p2c8p7c3p6c4:"DRAW",c1p5c9p3c7p2c4:"WIN",c1p5c9p3c7p4c8:"WIN",c1p5c9p3c7p6c8:"WIN",c1p5c9p3c7p8c4:"WIN",c1p5c9p4c6p2c3:"WIN",c1p5c9p4c6p3c7p2c8:"WIN",c1p5c9p4c6p3c7p8c2:"DRAW",c1p5c9p4c6p7c3:"WIN",c1p5c9p4c6p8c3:"WIN",c1p5c9p6c4p2c7:"WIN",c1p5c9p6c4p3c7:"WIN",c1p5c9p6c4p7c3p2c8:"DRAW",c1p5c9p6c4p7c3p8c2:"WIN",c1p5c9p6c4p8c7:"WIN",c1p5c9p7c3p2c6:"WIN",c1p5c9p7c3p4c2:"WIN",c1p5c9p7c3p6c2:"WIN",c1p5c9p7c3p8c6:"WIN",c1p5c9p8c2p3c7p4c6:"DRAW",c1p5c9p8c2p3c7p6c4:"WIN",c1p5c9p8c2p4c3:"WIN",c1p5c9p8c2p6c3:"WIN",c1p5c9p8c2p7c3:"WIN"
}

var moves = {c1p2:"c5",c1p2c5p3:"c9",c1p2c5p4:"c9",c1p2c5p6:"c9",c1p2c5p7:"c9",c1p2c5p8:"c9",c1p2c5p9:"c7",c1p2c5p9c7p3:"c4",c1p2c5p9c7p4:"c3",c1p2c5p9c7p6:"c3",c1p2c5p9c7p8:"c3",c1p3:"c5",c1p3c5p2:"c9",c1p3c5p4:"c9",c1p3c5p6:"c9",c1p3c5p7:"c9",c1p3c5p8:"c9",c1p3c5p9:"c6",c1p3c5p9c6p2:"c4",c1p3c5p9c6p4:"c2",c1p3c5p9c6p4c2p7:"c8",c1p3c5p9c6p4c2p8:"c7",c1p3c5p9c6p7:"c4",c1p3c5p9c6p8:"c4",c1p4:"c5",c1p4c5p2:"c9",c1p4c5p3:"c9",c1p4c5p6:"c9",c1p4c5p7:"c9",c1p4c5p8:"c9",c1p4c5p9:"c3",c1p4c5p9c3p2:"c7",c1p4c5p9c3p6:"c2",c1p4c5p9c3p7:"c2",c1p4c5p9c3p8:"c2",c1p5:"c9",c1p5c9p2:"c8",c1p5c9p2c8p3:"c7",c1p5c9p2c8p4:"c7",c1p5c9p2c8p6:"c7",c1p5c9p2c8p7:"c3",c1p5c9p2c8p7c3p4:"c6",c1p5c9p2c8p7c3p6:"c4",c1p5c9p3:"c7",c1p5c9p3c7p2:"c4",c1p5c9p3c7p4:"c8",c1p5c9p3c7p6:"c8",c1p5c9p3c7p8:"c4",c1p5c9p4:"c6",c1p5c9p4c6p2:"c3",c1p5c9p4c6p3:"c7",c1p5c9p4c6p3c7p2:"c8",c1p5c9p4c6p3c7p8:"c2",c1p5c9p4c6p7:"c3",c1p5c9p4c6p8:"c3",c1p5c9p6:"c4",c1p5c9p6c4p2:"c7",c1p5c9p6c4p3:"c7",c1p5c9p6c4p7:"c3",c1p5c9p6c4p7c3p2:"c8",c1p5c9p6c4p7c3p8:"c2",c1p5c9p6c4p8:"c7",c1p5c9p7:"c3",c1p5c9p7c3p2:"c6",c1p5c9p7c3p4:"c2",c1p5c9p7c3p6:"c2",c1p5c9p7c3p8:"c6",c1p5c9p8:"c2",c1p5c9p8c2p3:"c7",c1p5c9p8c2p3c7p4:"c6",c1p5c9p8c2p3c7p6:"c4",c1p5c9p8c2p4:"c3",c1p5c9p8c2p6:"c3",c1p5c9p8c2p7:"c3",c1p6:"c5",c1p6c5p2:"c9",c1p6c5p3:"c9",c1p6c5p4:"c9",c1p6c5p7:"c9",c1p6c5p8:"c9",c1p6c5p9:"c3",c1p6c5p9c3p2:"c7",c1p6c5p9c3p4:"c2",c1p6c5p9c3p7:"c2",c1p6c5p9c3p8:"c2",c1p7:"c5",c1p7c5p2:"c9",c1p7c5p3:"c9",c1p7c5p4:"c9",c1p7c5p6:"c9",c1p7c5p8:"c9",c1p7c5p9:"c8",c1p7c5p9c8p2:"c4",c1p7c5p9c8p2c4p3:"c6",c1p7c5p9c8p2c4p6:"c3",c1p7c5p9c8p3:"c2",c1p7c5p9c8p4:"c2",c1p7c5p9c8p6:"c2",c1p8:"c5",c1p8c5p2:"c9",c1p8c5p3:"c9",c1p8c5p4:"c9",c1p8c5p6:"c9",c1p8c5p7:"c9",c1p8c5p9:"c7",c1p8c5p9c7p2:"c4",c1p8c5p9c7p3:"c4",c1p8c5p9c7p4:"c3",c1p8c5p9c7p6:"c4",c1p9:"c5",c1p9c5p2:"c7",c1p9c5p2c7p3:"c4",c1p9c5p2c7p4:"c3",c1p9c5p2c7p6:"c3",c1p9c5p2c7p8:"c3",c1p9c5p3:"c6",c1p9c5p3c6p2:"c4",c1p9c5p3c6p4:"c2",c1p9c5p3c6p4c2p7:"c8",c1p9c5p3c6p4c2p8:"c7",c1p9c5p3c6p7:"c4",c1p9c5p3c6p8:"c4",c1p9c5p4:"c3",c1p9c5p4c3p2:"c7",c1p9c5p4c3p6:"c2",c1p9c5p4c3p7:"c2",c1p9c5p4c3p8:"c2",c1p9c5p6:"c3",c1p9c5p6c3p2:"c7",c1p9c5p6c3p4:"c2",c1p9c5p6c3p7:"c2",c1p9c5p6c3p8:"c2",c1p9c5p7:"c8",c1p9c5p7c8p2:"c4",c1p9c5p7c8p2c4p3:"c6",c1p9c5p7c8p2c4p6:"c3",c1p9c5p7c8p3:"c2",c1p9c5p7c8p4:"c2",c1p9c5p7c8p6:"c2",c1p9c5p8:"c7",c1p9c5p8c7p2:"c3",c1p9c5p8c7p3:"c4",c1p9c5p8c7p4:"c3",c1p9c5p8c7p6:"c3"
}

var TicTacToe = {moves:"",computer:"X",player:"O"}

$(".square").hover(function() {
  if (document.getElementById("status").innerHTML !== "Your move") {
    $(this).css('cursor','default');
    return;
  }
  if(document.getElementById(this.id).innerHTML === "") {
    $(this).css('cursor','pointer');
    $(this).css("background-color", "#e6f2ff");
  }
  }, function() {
    $(this).css("background-color", "white");
    $(this).css('cursor','default');
});

$("#playButton").mouseup(function() {
  reset();
});

$(".square").mousedown(function() {
  if (document.getElementById(this.id).innerHTML !== "") {
    return;
  }
  if (document.getElementById("status").innerHTML !== "Your move") {
    return;
  }
  document.getElementById(this.id).innerHTML = TicTacToe.player;
  if (this.id === "topMiddle") {
    TicTacToe.moves += "p2";
  } else if (this.id === "topRight") {
    TicTacToe.moves += "p3";
  } else if (this.id === "centerLeft") {
    TicTacToe.moves += "p4";
  } else if (this.id === "centerMiddle") {
    TicTacToe.moves += "p5";
  } else if (this.id === "centerRight") {
    TicTacToe.moves += "p6";
  } else if (this.id === "bottomLeft") {
    TicTacToe.moves += "p7";
  } else if (this.id === "bottomMiddle") {
    TicTacToe.moves += "p8";
  } else if (this.id === "bottomRight") {
    TicTacToe.moves += "p9";
  }
  setTimeout(function() {
    var computerMove = moves[TicTacToe.moves];
    TicTacToe.moves += computerMove;
    if (computerMove === "c2") {
      document.getElementById("topMiddle").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c3") {
      document.getElementById("topRight").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c4") {
      document.getElementById("centerLeft").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c5") {
      document.getElementById("centerMiddle").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c6") {
      document.getElementById("centerRight").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c7") {
      document.getElementById("bottomLeft").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c8") {
      document.getElementById("bottomMiddle").innerHTML = TicTacToe.computer;
    } else if (computerMove === "c9") {
      document.getElementById("bottomRight").innerHTML = TicTacToe.computer;
    }
    if (endGame[TicTacToe.moves] === "WIN") {
      document.getElementById("status").innerHTML = "Computer won";
      document.getElementById("status").style.color = "#DC143C";
      document.getElementById("status").style.fontWeight = "bold";
    } else if (endGame[TicTacToe.moves] === "DRAW") {
      document.getElementById("status").innerHTML = "Game is a draw";
      document.getElementById("status").style.color = "#DC143C";
      document.getElementById("status").style.fontWeight = "bold";
    }
  }, 250);
  $(this).css("background-color", "white");
  $(this).css('cursor','default');
});

function reset() {
  document.getElementById("topLeft").innerHTML = "";
  document.getElementById("topMiddle").innerHTML = "";
  document.getElementById("topRight").innerHTML = "";
  document.getElementById("centerLeft").innerHTML = "";
  document.getElementById("centerMiddle").innerHTML = "";
  document.getElementById("centerRight").innerHTML = "";
  document.getElementById("bottomLeft").innerHTML = "";
  document.getElementById("bottomMiddle").innerHTML = "";
  document.getElementById("bottomRight").innerHTML = "";
  TicTacToe.moves = "c1";
  document.getElementById("topLeft").innerHTML = TicTacToe.computer;
  document.getElementById("status").innerHTML = "Your move";
  document.getElementById("status").style.color = "#1980e6";
  document.getElementById("status").style.fontWeight = "normal";
};

window.onload = function() {
  reset();
};

$("input[type=radio][name=playAS]").change(function() {
  if (this.value === "O") {
    TicTacToe.computer = "X";
    TicTacToe.player = "O";
  } else if (this.value === "X") {
    TicTacToe.computer = "O";
    TicTacToe.player = "X";
  }
  reset();
});