// Problem 1
function calculateMoney(ticketSales) {
  if (typeof ticketSales !== "number" || ticketSales <= 0) {
    return "Invalid input";
  }
  var perTicketPrice = 120;
  var darowanSalary = 500;
  var staff = 8;
  var lunchCostPerPerson = 50;
  return (
    ticketSales * perTicketPrice - (darowanSalary + staff * lunchCostPerPerson)
  );
}

// Problem 2
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    var childName = name.toLowerCase();
    var lastLatter = childName.charAt(childName.length - 1);
    if (["a", "y", "i", "e", "o", "u", "w"].includes(lastLatter)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

// Problem 3
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  return array.filter((item) => typeof item === "number" && !isNaN(item));
}
// Problem 4
function password(obj) {
  var objPropereties = Object.keys(obj)
  if (obj.birthYear.toString().length !== 4 || typeof obj.birthYear !== "number" || objPropereties[0] !=="name" ||
objPropereties[1] !==("birthYear") || objPropereties[2] !=="siteName"
  ) {
    return "invalid";
  } else {
    return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
  }
}
// Problem 5
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  } else {
    var totalIncom = 0;
    var totalTexMoney = 0;
    for (var i = 0; i < arr.length; i++) {
      totalIncom = totalIncom + arr[i];
      if (arr[i] >= 3000) {
        totalTexMoney = totalTexMoney + arr[i];
      }
    }
    var totalTex = totalTexMoney * 0.2;
    var totalSavings = totalIncom - (totalTex + livingCost);
    if (totalSavings >= 0) {
      return totalSavings;
    } else {
      return "earn more";
    }
  }
}
