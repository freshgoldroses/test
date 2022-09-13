// What is Bitcoin price today?
// 21000
// How much $ do you have?
// 1000
// You can buy 0.0476190 BTC
// calculateBtn.addEventListener("click", culculateHowMuchToBuy);



let calculateBtn = document.querySelector("#calculate-btn");
let h1 = document.querySelector("h1");

function culculateHowMuchToBuy() {
    let bitcoinPrice = prompt("What is Bitcoin price today?");
    let amountOfMoney;
    let result;
    let sentence;

    if (bitcoinPrice.length === 0) {
        return alert("Incorrect bitcoin price. Try again");
    } else {
        amountOfMoney = prompt ("How much $ do you have?");
    }
    
    if (amountOfMoney.length === 0) {
        return alert("Incorrect type of the field of money amount. Try again");
    } else {
        result = amountOfMoney/bitcoinPrice;
        result = Math.round(result*100)/100;
        sentence = `You can buy ${result} BTC`;
        return h1.innerHTML = sentence;
    }

}

calculateBtn.addEventListener("click", culculateHowMuchToBuy);