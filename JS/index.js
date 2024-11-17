// function play(){
//     // 1. hide home screen. add hidden class to hide
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show playground section. remove hidden class from playground section
//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyPress(event) {
    const pressedKey = event.key;
    // get current key or displayed key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const displayKey = (currentAlphabetElement.innerText).toLocaleLowerCase();

    // check matched or not
    if (pressedKey === displayKey) {

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore)
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ===========================================
        // // update score
        // // 1. get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // update current score
        // const newScore = currentScore + 1;
        // // show total current score
        // currentScoreElement.innerText = newScore;
        // ===========================================
        // next round
        continueGame();
        removeKbdBackgroundColorById(pressedKey);
    }
    else {
        const lifeScore = getTextElementValueById('life-score');
        const updatedLifeScore = lifeScore - 1;
        setTextElementValueById('life-score', updatedLifeScore);

        // ===========================================
        // //1. get current life score
        // const currentLifeScoreElement = document.getElementById('life-score');
        // const currentLifeScoreText = currentLifeScoreElement.innerText;
        // const currentLifeScore = parseInt(currentLifeScoreText);
        // //2. reduce life score if you pressed wrong key
        // const newLifeScore = currentLifeScore - 1;
        // //3. show the updated life score
        // currentLifeScoreElement.innerText = newLifeScore;
        // ===========================================
    }

}

document.addEventListener('keyup', handleKeyboardKeyPress);

function continueGame() {
    // 1. generate random alphabet
    const alphabet = getRandomAlphabet();
    // display alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setKbdBackgroundColorById(alphabet);


}
function play() {
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}

