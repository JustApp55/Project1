//generate random for correct answer
const correct = Math.floor(Math.random() * 99) + 1;
console.log('Random Number', correct);

function checkGuess() {
    
    //user input guess number value
  let txtGuess = guess.value; 
    if(txtGuess < correct) {
        response.textContent = `Too Low ${txtGuess}. Try Again`;
    } else if (txtGuess > correct) {
        response.textContent = `Too High ${txtGuess}.Try Again`;
    } else if (txtGuess == correct) {
        response.textContent = "Yay! Correct.  You Smartie Pants!";
    } 
    
}
//evenListener will be the button click; first parameter is 'click.' and the second parameter is the name of the function to run when the user clicks the button//
clickAgain.addEventListener('click', checkGuess)
