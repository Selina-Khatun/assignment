// Problem-01 : Help The Zoo Manager
function calculateMoney(ticketSales) {
  if (typeof ticketSales !== "number" || ticketSales <= 0) {
    return "Invalid Number";
  }
  var ticketPrice = 120;
  var caretakerSalary = 500;
  var staffQuantity = 8;
  var lunchCost = 50;
  var restMoney =
    ticketSales * ticketPrice - (caretakerSalary + staffQuantity * lunchCost);
  return restMoney;
}
//   Problem-02: Good Name , Bad Name
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  var childName = name.toLowerCase();
  if (
    ["a", "y", "i", "e", "o", "u", "w"].includes(
      childName.charAt(childName.length - 1),
    )
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
// Problem 03 : Virus in my Array
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  var vairusArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      vairusArray.push(array[i]);
    }
  }
  return vairusArray;
}
// Problem 04 : Make A Great Password
function password(myObj) {
  var myObjPropereties = Object.keys(myObj);
  if (
    myObj.birthYear.toString().length !== 4 ||
    typeof myObj.birthYear !== "number" ||
    myObjPropereties[0] !== "name" ||
    myObjPropereties[1] !== "birthYear" ||
    myObjPropereties[2] !== "siteName"
  ) {
    return "invalid";
  }
  var myPass = myObj.siteName + "#" + myObj.name + "@" + myObj.birthYear;
  return myPass;
}
//   Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  var totalIncom = 0;
  var totalTexAmount = 0;
  for (var i = 0; i < arr.length; i++) {
    totalIncom = totalIncom + arr[i];
    if (arr[i] >= 3000) {
        totalTexAmount = totalTexAmount + arr[i];
    }
  }
//   var totalTex = totalTexMoney * 0.2;
  var totalSavingsAmount = totalIncom - ((totalTexAmount * 0.2) + livingCost);
  if (totalSavingsAmount >= 0) {
    return totalSavingsAmount;
  } else {
    return "earn more";
  }
}
