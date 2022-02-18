//generate random for correct answer
const correct = Math.floor(Math.random() * 99) + 1;
console.log('Random Number', correct);



//document.querySelector("#response").innerHTML = " (response) ";
function checkGuess() {
  
    let txtGuess = parseInt(document.querySelector('#txtGuess').value);
    //user input guess number value
    if(txtGuess < correct) {
        document.querySelector("#response").innerHTML = `Too Low ${txtGuess}. Try Again`;
    } else if (txtGuess > correct) {
        document.querySelector("#response").innerHTML = `Too High ${txtGuess}.Try Again`;
    } else if (txtGuess == correct) {
        document.querySelector("#response").innerHTML = "Yay! Correct.  You Smartie Pants!";
    } 
    
}
//evenListener will be the button click; first parameter is 'click.' and the second parameter is the name of the function to run when the user clicks the button//
clickAgain.addEventListener('click', checkGuess)
