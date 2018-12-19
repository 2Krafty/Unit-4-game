// Selects a random number to be should be between 19 - 120
// Random number has to be between 1 - 12
// Appending random number to the randomNumber id in the html doc
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  var num1= Math.floor(Math.random()*11+1)
  
  
  $('#randomNumber').text(Random);

  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables 
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

function win(){
alert("Winner Winner!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal "loser"
function lose(){
alert ("Loser!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//sets up click for gems
  $('.gems').on ('click', function(){
    num1= Math.floor(Math.random()*11+1);
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  })  
  
  });   
