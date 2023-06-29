Description: cardVerify()

Test: It should reject inputs which aren't numbers:
code: 
let card = "hello";
cardVerify();
Expected Output: "hello is not a number."

Test: It should reject inputs which are numbers:
code: 
let card = "123";
cardVerify();
Expected Output: "123 is a number."

Test: It should return true if the input is 16 numbers."
Code:
let card = "0998445533334452";
cardVerify();
Expected Output: "This card number is valid."

Test: "It should return false if the input is not 16 numbers."
Code:
let card = "16468534223";
cardVerify();
Expected Output:"This card number is not valid."

Description: luhnAlg()

Test: "It should return the inputted card number."
Code: 
let cardNumber = "4102 0808 8043 5620";
luhnAlg();
Expected Output: ""4102 0808 8043 5620";


Test: "It should return every other digit of card number."
Code:
let cardNumber = "4102 0808 8043 5620";
luhnAlg();
Expected Output: "12880360"





