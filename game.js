//generate random number for correct answer
const correct = Math.floor(Math.random() * 99) + 1; 

//input user guess number to match the randomly generated number
let txtGuess = document.querySelector('#txtGuess');
console.log(correct)

function checkGuess() {
  
    //runs user input guess number value
    if(txtGuess.value < correct) {
        document.querySelector("#response").innerHTML = `${txtGuess.value}, Too low. Try Again`;
    } else if (txtGuess.value > correct) {
        document.querySelector("#response").innerHTML = `${txtGuess.value}, Too High. Try Again`;
    } else if (txtGuess.value == correct) {
        document.querySelector("#response").innerHTML = "Yay! Correct. You Smartie Pants!";
    } 
    
}
//evenListener will be the button click; first parameter is 'click.' and the second parameter is
// the name of the function to run when the user clicks the button
document.querySelector("#clickAgain").addEventListener('click', checkGuess)




