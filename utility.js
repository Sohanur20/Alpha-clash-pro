
function hideElementByid(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElement(showId) {
    const element = document.getElementById(showId);
    element.classList.remove('hidden')
}

function setBackgraundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400')

}

function getElementAlphabet() {
    const aplphabetString = 'abcdefghijklmnopqrstwrxyz'
    const alphabets = aplphabetString.split('')
//    console.log(alphabets)
    const randomNumber = Math.random() * 25 ;
    const  index = Math.round(randomNumber);
   

const alphabet = alphabets[index];
console.log(index,alphabet)
return alphabet




}