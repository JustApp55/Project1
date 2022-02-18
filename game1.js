// //array containing each of the 33 cells, both the enemy and the player cells
// const cells = Array.from(document.querySelectorAll(".cell"));

// //split up the arrays into 2 different arrays for the enemy and the player cells
// //inside the slice method, it will select the cells between index 0 and index 33 and will give us the first 36 cells
// const enemyCells = cells.slice(0, 33);
// const playerCells = cells.slice(33); //with the player cells, it will be 33 and beyond, providing no extra argument
// const scoreDisplay = docement.querySelector(".score"); //displays the strong tag in the html

// //the amount of time the ball is pushed down
// let dropCount, speed, score;

// //this resets back to the default to play again  ..javascript does it here instead of within the html
// reset();

// //this will respond to arrow keys to move to either right or left
// document.addEventListener("keydown", e => {
//     if(!dropCount){             //this allows the game to start when a key is pressed, 
//         startGame();            //      preventing if from starting when it's loaded
//     }
//     const player = document.querySelector(".player")//this is a reference to the player object (class of player)
    
//                                 //this prevents the error of the player cell from moving up or down..it stays in the same row but only to the right or left
//     if (e.key === "ArrowRight" && playerCells.includes(player.parentElement.nextElementSibling)) {
//         player.parentElement.nextElementSibling.appendChild(player);
//         //this gives you the player containing the cell, then moves to the next cell (the last one)..the appendChild will move the player down to the parent element
//     }
//                       //this prevents the error of the player cell from moving up or down..it stays in the same row but only to the right or left
//     if (e.key === "ArrowLeft" && playerCells.includes(player.parentElement.nextElementSibling)) {
//         player.parentElement.previousElementSibling.appendChild(player);
//         //this gives you the player containing the cell, then moves to the previous cell (the last one)..the appendChild will move the player down to the parent element
//     }
// })

// //it resets the game to its default values
// function reset(){
//     dropCount = 0;
//     speed = 1000; // equal to 1 second
//     score = 0;
//     scoreDisplay.innerHTML = "0"; //this resets the number just in case the user has previously played the game

//     cells.forEach(cell => cell.innerHTML = "");
//     // playerCells[1].innerHTML = '<div class="player"></div>';//the js will render the player cell instead of the html
// }

// function startGame(){
//     reset(); //when you start a new game, the current state(score, dropCount, and the speed) is reset to default
//     loop();
// }

// function loop() {
//     let stopGame = false;  // this function check collision and making new enemies appear
//                             // if there's a collision, the game stops.
//     for(let i= enemyCells.length - 1; i >= 0; i--) {  // it will start at cell 35 and loops/moves downwards till it reaches 0
//         const cell = enemyCells[i]  //when the loop first runs for index 35, 
//         const nextCell = cells[i + 3];
//         const enemy = cell.children[0];    //refers to the div with the class of enemy

//         if(!enemy) {  // if there's no enemy inside the div, it just continues to the next cell to loop over
//             continue;
//         }

//         nextCell.appendChild(enemy)// moving the enemy from the previous cell to the next cell

//         if(playerCells.includes(nextCell)) {  //this checks for collision, if the next cell of the enemy ball's is the player cell, the game stops when it collides
//             if(nextCell.querySelector(".player")) { 
//                 stopGame = true;   //the game stops when collision happens
//             } else {
//                 score++; // if collision does not happen, the player is granted a point
//                 speed = Math.max(95, speed - 25); // 95 is the maximum speed of the game
//                 scoreDisplay.innerHTML = score;  //this updates the HTML score with the new score
//                 enemy.remove();  // this removes the enemy when it does not collide with the player
//             }
            
//         } 
//     }
//         //this evens the drop count, then add new enemy
//     if (dropCount % 2 === 0) {
//         const position = Math.floor(Math.random * 3);// every second it picks a new random number
//         enemyCells[position].innerHTML = '<div class="enemy"></div>'; // will give enemy position between 0, 1 or 2
        
//     }
                            
//     if (stopGame) {
//         alert('Your score: ' + score + ". Close this window to play again.");
//         reset(); // game is reset to initial state when collision happens         
//     } else {
//         dropCount++; // if the player has not yet lost, the drop count increase by 1
//         setTimeout(loop, speed);   //  speed is increased at a specified speed as the loop is recalled
//     }
// }


