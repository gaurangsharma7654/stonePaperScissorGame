
let result="";
let computerMove ;
let player;

let score = JSON.parse(localStorage.getItem('score'));
// add game logic 

if(!score){
     score ={
        win:0,
        loss:0,
        tie:0
    };
}
    
function reset(){
    score.win=0;
    score.loss=0;
    score.tie=0;
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector(".results").innerHTML = '';
    updateScores();
}

function playGame(playerMove)
{
  if(playerMove === 'rock')
  {
    player = 'rock';
     computerMove = calculateMove();
    if(computerMove === 'rock')
        result = 'TIE';
    if(computerMove === 'scissor')
        result = 'YOU WIN';
    if(computerMove === 'paper')
        result = 'YOU LOSS';
  } else if(playerMove === 'scissor')
    {
        player = 'scissor';
       computerMove = calculateMove();
      if(computerMove === 'scissor')
          result = 'TIE';
      if(computerMove === 'paper')
          result = 'YOU WIN';
      if(computerMove === 'rock')
          result = 'YOU LOSS';
    }
    else if(playerMove === 'paper')
        {
            player = 'paper';
           computerMove = calculateMove();
          if(computerMove === 'paer')
              result = 'TIE';
          if(computerMove === 'rock')
              result = 'YOU WIN';
          if(computerMove === 'scissor')
              result = 'YOU LOSS';
        }

        document.querySelector(".results").innerHTML = `
        You choose : '${player}'<br>
        Computer choose : '${computerMove}' <br>
         '${result}'
        `;
        
         if(result === 'YOU WIN'){
            score.win++;
         } else if(result === 'YOU LOSS'){
            score.loss++;
         } else if(result === 'TIE'){
            score.tie++;
         }

        localStorage.setItem('score',JSON.stringify(score));
        updateScores();
}

function updateScores(){
    document.querySelector(".scores").innerHTML = `
        Wins : ${score.win} , Loss : ${score.loss} , Tie : ${score.tie}
        `;
}


function calculateMove(){
    let temp = Math.random();
    if(temp >= 0 && temp < 1/3)
     return 'rock';
    if(temp >= 1/3 && temp < 2/3)
        return 'paper';
    if(temp >= 2/3 && temp <= 1)
        return 'scissor';
}
