 function cardVerify(cardNumber){ 
  if (cardNumber.length === 16) {
   // let parseNumber = parseInt(cardNumber);
    console.log("This card number is valid");
    return true;
  } else {
    console.log("This card number is not valid" )
    return false;
    }
  };

  let cardNumber = "hello"
  function numberVer(cardNumber) {
    if (isNaN(cardNumber)) {
      return cardNumber + " is not a number."
      return false;
    } else if (cardNumber.length === 16) {
      return cardNumber + "is a valid credit card number."
      return true;
    }
  }


let cardNumber = "16468534223";
luhnAlg(cardNumber) {
  let digits = Array.from(cardNumber);
  let arrayEven = digits.map((x, index) => {
    return i % 2 === 0;
  });
};
console.log(luhnAlg(cardNumber));

  let newCard = [];

  }
  for (let i = 0; i < digits.length; i++) {
      if (i % 2 === 0) {
        newCard.push(digits);
        } 
      }
  return newCard;
}


function luhnAlg(cardNumber) {
  let digits = Array.from(cardNumber);






let cardNumber = "4102080880435620";
let everyOtherDigit= luhnAlg(cardNumber);
console.log 


let evenNum = arrX.filter((element, index) => {
  return index % 3 === 0;
}


// function luhnAlg(cardNumber) {
//   let arrX = cardNumber.split(" ");
//   let newCard = arrX.map(function(number, index) {
//     if (index % 2 === 1) {
//       return (parseInt(number) * 2).toString();
//     } else {
//     return number;
//     }
//   });
// console.log(newCard);
// return newCard.join(" ");
// }



 
 