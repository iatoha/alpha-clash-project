// function play (){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     console.log(homeSection.classList);
//     const playGroundSection =document.getElementById('playground-section');
//     playGroundSection.classList.remove('hidden');
//     console.log(playGroundSection.classList);
// }

function continueGame (){
    const alphabet =getARandomAlphabet();
}

function play() {
    hideElementById('home-screen');
    showElementById('playground-section');
    continueGame()
}