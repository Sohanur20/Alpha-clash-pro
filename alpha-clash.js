

// function play() {
    
// //Step 1 hide the home screen to hide the screen at the class hidden to the home section

// const homeSection = document.getElementById('home-screen');
// // console.log(homeSection.classList)
//  homeSection.classList.add('hidden')


// // Show the playground

// const playGraundSection = document.getElementById('play-ground');
// // console.log(playGraundSection.classList)
// playGraundSection.classList.remove('hidden')
// }

function play() {
    
    hideElementByid('home-screen')
    showElement('play-ground')
    continueGame()

}

function continueGame() {
    
    const alphabet = getElementAlphabet();
   console.log('random alphabet',alphabet)

//    Set  randomly generated alphabet to the screen show it

const currentAlphabet = document.getElementById('display-text');
currentAlphabet.innerText = alphabet ;

setBackgraundColor(alphabet)
}