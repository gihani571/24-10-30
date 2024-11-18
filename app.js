const guessNumber = Math.floor(Math.random() * 10) + 1;
console.log(guessNumber);
let countNum = 3;

function guess() {
    let guessText = Number(document.getElementById("txtGuess").value);  


    if (countNum > 0) {
        if (guessNumber === guessText) {
            countNum = 0;
            chance.innerHTML = "";
            answer.innerHTML = "You WIN😜";
        } else {
            countNum--;
            count.innerHTML = countNum;
            if (guessNumber > guessText) {
                answer.innerHTML = "Your number is too low....TRY Again!";
            } else {
                answer.innerHTML = "Your number is too high....TRY Again!";
            }
        }
        
        if (countNum === 0 && guessNumber !== guessText) {
            countNum = 0;
            chance.innerHTML = "";
            answer.innerHTML = "You Loss🙁 Correct number is : "+guessNumber;
        }
    }
}