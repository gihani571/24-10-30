const guessNumber = Math.floor((Math.random()*10)+1);
console.log(guessNumber)
let countNumber = 3;
count.innerHTML = "3"
function guess() {
   

    let txtGuessValue = Number(document.getElementById("txtGuess").value);
  

    if(txtGuessValue == guessNumber){
        answer.innerHTML = "WIN";
      //  console.log("correct")
    }else{
        answer.innerHTML = "LOSS";

    }
   

}