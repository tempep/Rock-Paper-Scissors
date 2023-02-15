
//in this function we get the option that was selected for the player and then we returned;
const playerSelection=function getplayerChoice(){
    const getMovePlayer=document.getElementById("optionSelected").value;
    console.log("Player move: "+getMovePlayer);
    return getMovePlayer.toLowerCase();
}

//in this function we get an Array to get a ramdon option from the computer and then we returned as String;
const computerSelection=function getComputerChoice(){
    const arrayOption=["rock","paper","scissors"];
    var random=Math.random()*arrayOption.length | 0;
    var arrayValue=arrayOption[random];
    console.log("Computer move: "+arrayValue);
    return arrayValue;
}

//this is the main function,in this function we have the conditional for the game;
function whoIsTheWinner(player,computer){
    if(player==="rock" && computer==="scissors"){
        console.log("You win! Rock beats Scissors");
    }else if(player==="paper" && computer==="rock"){
        console.log("You win! Paper beats Rock");
    }else if(player==="scissors" && computer==="paper"){
        console.log("You Win! Scissors beats Paper");
    }else if(player===computer){
        console.log("This is a drawn match, you can play again");
    }else {
        const firstCharUpper=player.charAt(0).toUpperCase() + player.slice(1);
        const firstCharUpper2=computer.charAt(0).toUpperCase() + computer.slice(1);
        console.log(`You lose! ${firstCharUpper2} beats ${firstCharUpper}`);
    }
}

//We call the function and then we passed the options from the player and computer;
whoIsTheWinner(playerSelection(),computerSelection());