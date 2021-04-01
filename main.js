//Create 3 buttons, best out of 3, 5, and 7
//After selected, replace (delete the previous buttons) with rock paper and scissors
//Create three buttons, rock paper and scissors 
//When player clicks, register player move as the corresponding number (1 = rock, 2 =  paper 3 = scissors)
//Finally, remove all elements, add a congratulations text to whoever won, and add a replay button
//If replay button is clicked repeat

//Global Variables

let computations = 0;
let player_wins = 0
let computer_wins = 0;

//Obtain references to containers

const main_container = document.getElementById('main-container')

//Create Retry Button Logic

function rematchGame(){
    //Remove everything
    main_container.innerHTML = ''
    //Reset Global Variables
    computations = 0;
    player_wins = 0;
    computer_wins = 0;
    //Recreate buttons
    createButtons()
}

//Functions that create the buttons

function bestOutOfThreeCreation(){
    const Three = document.createElement('button')
    const text3 = document.createTextNode('Best out of 3')
    Three.addEventListener('click', bestOutOfThree)
    
    Three.appendChild(text3)
    main_container.appendChild(Three)
}

function bestOutOfFiveCreation(){
    const Five = document.createElement('button')
    const text5 = document.createTextNode('Best out of 5')
    Five.addEventListener('click', bestOutOfFive)
    
    Five.appendChild(text5)
    main_container.appendChild(Five)
}

function bestOutOfSevenCreation(){
    const Seven = document.createElement('button')
    const text7 = document.createTextNode('Best out of 7')
    Seven.addEventListener('click', bestOutOfSeven)
    
    Seven.appendChild(text7)
    main_container.appendChild(Seven)
}

function createButtons(){
    bestOutOfSevenCreation()
    bestOutOfFiveCreation()
    bestOutOfThreeCreation()
}

//Create logical functions (three, five, seven)

//Three Catalyst Functions

function catalystThreeRock (){
    rockMove(3)
}

function catalystThreePaper(){
    paperMove(3)
}

function catalystThreeScissors(){
    scissorsMove(3)
}

//Five catalyst Functions

function catalystFiveRock (){
    rockMove(5)
}

function catalystFivePaper(){
    paperMove(5)
}

function catalystFiveScissors(){
    scissorsMove(5)
}

//Seven Catalyst Functions

function catalystSevenRock (){
    rockMove(7)
}

function catalystSevenPaper(){
    paperMove(7)
}

function catalystSevenScissors(){
    scissorsMove(7)
}


function bestOutOfThree(){
    //Remove the creation buttons

    main_container.innerHTML = '';

    //Create three buttons for the actual game

    const Rock = document.createElement('button')
    const Rock_Text = document.createTextNode('Rock')

    const Paper = document.createElement('button')
    const Paper_Text = document.createTextNode('Paper')

    const Scissors = document.createElement('button')
    const Scissors_Text = document.createTextNode('Scissors')

    Rock.appendChild(Rock_Text)
    Paper.appendChild(Paper_Text)
    Scissors.appendChild(Scissors_Text)

    //Add Onclick Functions 
    Rock.addEventListener('click', catalystThreeRock)
    Paper.addEventListener('click', catalystThreePaper)
    Scissors.addEventListener('click', catalystThreeScissors)

    main_container.appendChild(Rock)
    main_container.appendChild(Paper)
    main_container.appendChild(Scissors)
 }

 function bestOutOfFive(){
    //Remove the creation buttons

    main_container.innerHTML = '';

    //Create three buttons for the actual game

    const Rock = document.createElement('button')
    const Rock_Text = document.createTextNode('Rock')

    const Paper = document.createElement('button')
    const Paper_Text = document.createTextNode('Paper')

    const Scissors = document.createElement('button')
    const Scissors_Text = document.createTextNode('Scissors')

    Rock.appendChild(Rock_Text)
    Paper.appendChild(Paper_Text)
    Scissors.appendChild(Scissors_Text)

    //Add Onclick Functions 
    Rock.addEventListener('click', catalystFiveRock)
    Paper.addEventListener('click', catalystFivePaper)
    Scissors.addEventListener('click', catalystFiveScissors)

    main_container.appendChild(Rock)
    main_container.appendChild(Paper)
    main_container.appendChild(Scissors)
 }

 function bestOutOfSeven(){
    //Remove the creation buttons

    main_container.innerHTML = '';

    //Create three buttons for the actual game

    const Rock = document.createElement('button')
    const Rock_Text = document.createTextNode('Rock')

    const Paper = document.createElement('button')
    const Paper_Text = document.createTextNode('Paper')

    const Scissors = document.createElement('button')
    const Scissors_Text = document.createTextNode('Scissors')

    Rock.appendChild(Rock_Text)
    Paper.appendChild(Paper_Text)
    Scissors.appendChild(Scissors_Text)

    //Add Onclick Functions 
    Rock.addEventListener('click', catalystSevenRock)
    Paper.addEventListener('click', catalystSevenPaper)
    Scissors.addEventListener('click', catalystSevenScissors)

    main_container.appendChild(Rock)
    main_container.appendChild(Paper)
    main_container.appendChild(Scissors)
 }
//Define functions for onclick events

function rockMove(numberOfMoves){
    //Add logic to best out of 3, 5, and 7

    let x = rockPaperScissors(1)
    if(x == 'win'){
        computations++
        player_wins++
        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You win this match!')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(x == "lose"){
        computations ++
        computer_wins++

        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You lose this match...')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(x == "tie"){
        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You tie this match.')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(computations == numberOfMoves){
        if(player_wins > computer_wins){
            //Delete everything else

            main_container.innerHTML = ""
            
            //Create the text

            let text = document.createElement('h1')
            let text_words = document.createTextNode("Congratulations! You won the best out of" + numberOfMoves + " ... care for a rematch?")
            text.appendChild(text_words)

            //Create Rematch button

            const rematchButton = document.createElement('button')
            let rematch_text = document.createTextNode('Rematch!')
            rematchButton.addEventListener('click', rematchGame)
            rematchButton.appendChild(rematch_text)

            //Add to main container

            main_container.appendChild(text)
            main_container.appendChild(rematchButton)

        }
        if(computer_wins > player_wins){
            //Delete everything else

            main_container.innerHTML = ""

            //Create text

            let loser_text = document.createElement('h1')
            let loster_text_words = document.createTextNode("Sadly, you lost. Care for a rematch?")
            loser_text.appendChild(loster_text_words)

            //Create rematch button
            const rematchButton = document.createElement('button')
            let rematch_text = document.createTextNode('Rematch!')
            rematchButton.appendChild(rematch_text)
            rematchButton.addEventListener('click', rematchGame)

            //Add to main container

            main_container.appendChild(loser_text)
            main_container.appendChild(rematchButton)
        }
    }
    
    
}

function paperMove(numberOfMoves){
    let x = rockPaperScissors(2)
    if(x == 'win'){
        computations++
        player_wins++
        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You win this match!')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(x == "lose"){
        computations ++
        computer_wins++

        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You lose this match...')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(x == "tie"){
        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You tie this match.')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(computations == numberOfMoves){
        if(player_wins > computer_wins){
            //Delete everything else

            main_container.innerHTML = ""
            
            //Create the text

            let text = document.createElement('h1')
            let text_words = document.createTextNode("Congratulations! You won the best out of " + numberOfMoves + " ... care for a rematch?")
            text.appendChild(text_words)

            //Create Rematch button

            const rematchButton = document.createElement('button')
            let rematch_text = document.createTextNode('Rematch!')
            rematchButton.appendChild(rematch_text)
            rematchButton.addEventListener('click', rematchGame)

            //Add to main container

            main_container.appendChild(text)
            main_container.appendChild(rematchButton)

        }
        if(computer_wins > player_wins){
            //Delete everything else

            main_container.innerHTML = ""

            //Create text

            let loser_text = document.createElement('h1')
            let loster_text_words = document.createTextNode("Sadly, you lost. Care for a rematch?")
            loser_text.appendChild(loster_text_words)

            //Create rematch button
            const rematchButton = document.createElement('button')
            let rematch_text = document.createTextNode('Rematch!')
            rematchButton.appendChild(rematch_text)
            rematchButton.addEventListener('click', rematchGame)

            //Add to main container

            main_container.appendChild(loser_text)
            main_container.appendChild(rematchButton)

        }
    }
}

function scissorsMove(numberOfMoves){
    let x = rockPaperScissors(3)
    if(x == 'win'){
        computations++
        player_wins++
        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You win this match!')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(x == "lose"){
        computations ++
        computer_wins++

        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You lose this match...')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(x == "tie"){
        const win_declaration = document.createElement('h2')
        const textOfWin = document.createTextNode('You tie this match.')
        win_declaration.appendChild(textOfWin)
        main_container.appendChild(win_declaration)
    }
    if(computations == numberOfMoves){
        if(player_wins > computer_wins){
            //Delete everything else

            main_container.innerHTML = ""
            
            //Create the text

            let text = document.createElement('h1') 
            let text_words = document.createTextNode("Congratulations! You won the best out of " + numberOfMoves + " ... care for a rematch?")
            text.appendChild(text_words)

            //Create Rematch button

            const rematchButton = document.createElement('button')
            let rematch_text = document.createTextNode('Rematch!')
            rematchButton.appendChild(rematch_text)
            rematchButton.addEventListener('click', rematchGame)

            //Add to main container

            main_container.appendChild(text)
            main_container.appendChild(rematchButton)

        }
        if(computer_wins > player_wins){
            //Delete everything else

            main_container.innerHTML = ""

            //Create text

            let loser_text = document.createElement('h1')
            let loster_text_words = document.createTextNode("Sadly, you lost. Care for a rematch?")
            loser_text.appendChild(loster_text_words)

            //Create rematch button
            const rematchButton = document.createElement('button')
            let rematch_text = document.createTextNode('Rematch!')
            rematchButton.appendChild(rematch_text)
            rematchButton.addEventListener('click', rematchGame)

            //Add to main container

            main_container.appendChild(loser_text)
            main_container.appendChild(rematchButton)

        }
    }
}

function rockPaperScissors(number){
            

    //Determine what move the computer makes
    let player_move = number;
    let computer_move = Math.floor(Math.random() * 4);

    // Check and match player move with computers move

    if (player_move == 1 && computer_move == 2){
        console.log("You lost! The computer chose paper!")
        return('lose')
    }
    else if (player_move == 1 && computer_move == 1){
        console.log("You tie! The computer also chose rock!")
        return('tie');
    }
    else if (player_move == 1 && computer_move ==3){
        console.log("You win! The computer chose scissors")
        return('win')
        
    }
    else if (player_move ==2 && computer_move ==1){
        console.log("You win! The computer chose rock!")
        x = 'win'
        return(x)
    }
    else if (player_move ==2 && computer_move ==2){
        console.log("You tie! The computer also chose paper!")
        x = 'tie'
        return(x);
    }
    else if (player_move ==2 && computer_move==3){
        console.log("You lose! The computer chose Scissors")
        x = 'lose'
        return(x)
    }
    else if (player_move ==3 && computer_move==1){
        console.log("You lose! The comuter chose Rock!")
        x = 'lose'
        return(x)
    }
    else if (player_move ==3 && computer_move ==2){
        console.log("You win! The computer chose paper!")
        x = 'win'
        return(x)
    }
    else if (player_move ==3 && computer_move==3){
        console.log("You tie! The computer also chose scissors")
        x = 'tie'
        return(x);
    }
    else{
    }


}

createButtons()