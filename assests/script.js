var choices = ['R', 'P', 'S']
window.prompt('Type R for  Rock, P for Paper, or S for Scissors below')
Math.floor(Math.random() * 3)
console.log(Math.floor(Math.random() * 3))

var computerChoice = choices[Math.floor(Math.random() * 3)]

window.alert(computerChoice)

// define wins, losses and ties

var wins = 0;
var losses = 0;
var ties = 0;

//give options for wins, losses and ties
function 
if (choices === 'R' && computerChoice === 'S') {
   wins++;
} else if (choices === 'R' && computerChoice === 'P') {
    losses++;
}else if (choices === 'R' && computerChoice === 'R'){
    ties++;
} else if (choices === 'P' && computerChoice === 'S') {
    wins++;
 } else if (choices === 'P' && computerChoice === 'R') {
     losses++;
 }else if (choices === 'P' && computerChoice === 'P'){
     ties++;     
 }else if (choices === 'S' && computerChoice === 'R') {
    wins++;
 } else if (choices === 'S' && computerChoice === 'P') {
     losses++;
 }else if (choices === 'S' && computerChoice === 'S'){
     ties++;     
 }

//save score data and show score to user
//repeat processuntil canceled
