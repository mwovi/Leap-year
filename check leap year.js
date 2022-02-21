function LeapYear(year) {
  let LastTwo = year.split("").slice(-2).join("");

  if (LastTwo === "00") {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(LeapYear("2100"));
