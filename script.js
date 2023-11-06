const prompt = require("prompt-sync")({signint:true});
let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
var enterName = document.getElementById("enterName").value;
var enterAmount = parseInt(document.getElementById("enterAmount").value);

if (enterAmount > 8000) {
  alert("Insufficient Balance.")
} else {
  var findUserBankAccount = enterName + "BankBalance";
  var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
  var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
  document.getElementById("myAccountBalance").innerText = myAccountBalance
  document.getElementById(findUserBankAccount).innerHTML = finalAmount;
  alert(`Successful Transaction !!  
  $${enterAmount} is sent to ${enterName}@email.com.`)

  // transaction history 
  var createPTag = document.createElement("li");
  var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
  createPTag.appendChild(textNode);
  var element = document.getElementById("transaction-history-body");
  element.insertBefore(createPTag, element.firstChild);
}
}

// function sendMoney() {
//   var enterName = document.getElementById("enterName").value;
//   var enterAmount = parseInt(document.getElementById("enterAmount").value);
//   var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

//   if (enterAmount > myAccountBalance) {
//     alert("Insufficient Balance.");
//   } else {
//     var findUserBankAccount = enterName + "BankBalance";
//     var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
//     myAccountBalance -= enterAmount;

//     document.getElementById("myAccountBalance").innerText = myAccountBalance;
//     document.getElementById(findUserBankAccount).innerHTML = finalAmount;

//     var currentDate = new Date();
//     var transactionText = `$${enterAmount} sent to ${enterName}@email.com on ${currentDate}.`;

//     var createPTag = document.createElement("li");
//     createPTag.appendChild(document.createTextNode(transactionText));

//     var transactionHistory = document.getElementById("transaction-history-body");
//     transactionHistory.insertBefore(createPTag, transactionHistory.firstChild);

//     alert(`Successful Transaction!!\n${transactionText}`);
//   }
// }





