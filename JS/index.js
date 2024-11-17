// function play(){
//     // 1. hide home screen. add hidden class to hide
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // show playground section. remove hidden class from playground section
//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

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

