// hide element
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// Random number and alphabet
function getRandomAlphabet() {
    // create a random alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvzxyz';
    const alphabets = alphabetString.split('');

    // create random index 0-25= 26 for 26 alphabet
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}
// set Keyboard background color
function setKbdBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeKbdBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}