// function play (){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     console.log(homeSection.classList);
//     const playGroundSection =document.getElementById('playground-section');
//     playGroundSection.classList.remove('hidden');
//     console.log(playGroundSection.classList);
// }

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set ramdomly generated alphabet
    const currentAlphbet = document.getElementById('current-alphabet');
    currentAlphbet.innerText = alphabet;

    // set background color
    setAddBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('playground-section');
    continueGame()
} 