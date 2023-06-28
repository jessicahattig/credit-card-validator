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

function luhnAlg(cardNumber) {
  let arrX = cardNumber.split(" ");
  let newCard = arrX.map(function(number, index) {
    if (index % 2 === 1) {
      return (parseInt(number) * 2).toString();
    } else {
    return number;
    }
  });
console.log(newCard);
return newCard.join(" ");
}



 
 