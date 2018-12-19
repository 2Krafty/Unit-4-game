$(document).ready(function () {
  var Random = Math.floor(Math.random() * 101 + 19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120

  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  function gemImageValue() {
    $(".gemImage").each(function () {

      var num1 = Math.floor(Math.random() * 11 + 1);
      $(this).attr("data-value", num1)
    });
  }

  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12

  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  //  Decaring variables 
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);

    gemImageValue();
  }

  function win() {
    alert("Winner Winner!");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal "loser"
  function lose() {
    alert("Loser!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
  $('.gemImage').on('click', function () {
    var gemValue = parseInt($(this).attr("data-value"));
    console.log(gemValue);
    userTotal = userTotal + gemValue;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
      win();
    } else if (userTotal > Random) {
      lose();
    }
  })
  reset();
});