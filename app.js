const guessNumber = Math.floor((Math.random()*10)+1);
    console.log(guessNumber);
    let countNum = 3;
    

    
    function guess(){
    if(countNum>0){
        let guessText = Number(document.getElementById("txtGuess").value);  
   
        while(guessText!==guessNumber){
            // console.log("yes");
           
            countNum = countNum - 1;
            count.innerHTML = countNum;
            console.log()
            break;
        }
        if(guessText==guessNumber){
            answer.innerHTML = "You WIN😜";
            
        }else{
            answer.innerHTML = "You Loss🙁";

        }
        if(countNum == 0){
            answer.innerHTML = "Game Over!🥳 <br> The  Number is " + guessNumber;
             
        }
       
    }

}