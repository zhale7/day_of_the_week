// Dom elements for future uses
const span = document.getElementById("dayOftheWeek");
const p = document.querySelector("p");
// Variables
let date = new Date();
let day = date.getDay();
console.log(day);
let nameOftheDay, quote;

switch (day) {
  case 0:
    nameOftheDay = "Sunday";
    quote = "Time to chillax!";
    break;
  case 1:
    nameOftheDay = "Monday";
    quote = "Monday morning blues!";
    break;
  case 2:
    nameOftheDay = "Tuesday";
    quote = "Taco Time!";
    break;
  case 3:
    nameOftheDay = "Wednesday";
    quote = "Two more days to the weekend.";
    break;
  case 4:
    nameOftheDay = "Thursday";
    quote = "The weekend is almost here...";
    break;
  case 5:
    nameOftheDay = "Friday";
    quote = "Weekend is here!";
    break;
  case 6:
    nameOftheDay = "Saturday";
    quote = "Time to party!";
    break;
}
// Display the day of the week to the browser
span.innerHTML = `${nameOftheDay}`.toUpperCase();
// Display descriptive quote, as well
p.innerHTML = `${quote}`;
