let userScore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");




const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer");
const genCompChoice = () => {
    const option = ["Paper", "Scissors", "Rock"];
    const randomID = Math.floor(Math.random() * 3);
    return option[randomID];
};


const drawGame = () => {

    console.log("game was a draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, CompChoice) => {
    if (userWin) {
        // console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'you win!'
            //your $ {userChoice }beats ${ CompChoice }';
        msg.style.backgroundColor = "green";
    } else {
        // console.log("you lose");
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = 'you lose.';
        //    $ { CompChoice }beats your $  "userChoice}';
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    //generate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice =", CompChoice);

    //Draw game
    if (userChoice === CompChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //paper ,scissors
            userWin = CompChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissors
            userWin = CompChoice === "Scissors" ? false : true;
        } else {
            //paper,rock
            userWin = CompChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);

    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("ID");
        // console.log("choice was clicked", userchoice);
        playGame(userChoice);
    });
});