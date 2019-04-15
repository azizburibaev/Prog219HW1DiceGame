/**
 * Created by bcuser on 4/4/19.
 */

let userAttempts = 0;
let startFunds = 5;
let objToremove = document.getElementById("paragraph");
let elementToremove = document.getElementById("ButtonBet");


function buttonClicked() 
{
  
  let diceImages =["./images/dice-1.jpg", "./images/dice-2.jpg",
                      "./images/dice-3.jpg","./images/dice-4.jpg",
                      "./images/dice-5.jpg", "./images/dice-6.jpg"];


    let randomDice1 = generateRndInteger(0,6)
    let randomDice2 = generateRndInteger(0,6)
    
    document.getElementById('image1').src = diceImages[randomDice1];
    document.getElementById('image2').src = diceImages[randomDice2];
      
              
            
            if (randomDice1===randomDice2) 
              {
                
                startFunds++;
                userAttempts++;
                console.log('The dices are equal!');
                document.getElementById("status").innerHTML = "You win!";
                document.getElementById("balance").innerHTML = startFunds;
                document.getElementById("turnCount").innerHTML = userAttempts;
                //console.log(startFunds);

              } 
              
              else if (((randomDice1+1)+(randomDice2+1))===7||((randomDice1+1)+(randomDice2+1))===11)
              
              { 
                startFunds++;
                document.getElementById("status").innerHTML = "You win!";
                document.getElementById("balance").innerHTML = startFunds;
                document.getElementById("turnCount").innerHTML = userAttempts;
                 userAttempts++;
                //console.log(startFunds);

              } 

              else 
            
              {
                startFunds--;
                 if (startFunds===0)
              
                  { 
                     //document.getElementById("ButtonBet").disabled = true;
                     //userAttempts++;
                     objToremove.removeChild(elementToremove);
                     //elementToremove.removeChild("ButtonBet");
                     document.getElementById("status").innerHTML = "Over!";
                     document.getElementById("balance").innerHTML = startFunds;
                     document.getElementById("turnCount").innerHTML = userAttempts;
                  } 
               
                userAttempts++;
                document.getElementById("status").innerHTML = "You lost!";
                document.getElementById("balance").innerHTML = startFunds;
                document.getElementById("turnCount").innerHTML = userAttempts;
                //console.log(startFunds);
 
              } 
             
      };
     
      function generateRndInteger(minNumber, maxNumber) 
          {
            return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    
          }


