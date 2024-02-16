function hideElementById(elementById){
    const element =document.getElementById(elementById);
    element.classList.add('hidden');
}
function showElementById(elementById){
    const element =document.getElementById(elementById);
    element.classList.remove('hidden');
}

function getARandomAlphabet (){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    console.log(alphabets);

    // get a random number betwen 0 to 25
    const randimNumber =Math.random()*25;
    const index =Math.round(randimNumber);
    // console.log(index);
    const alphabet =alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}