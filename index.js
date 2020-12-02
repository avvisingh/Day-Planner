const $currentDayTime = $('#currentDay');

let currentTime = moment().format('MMMM Do YYYY, h:mm a');
console.log(currentTime);

$currentDayTime.text(currentTime);

let $momentTest = moment("12-25-1995", "MM-DD-YYYY");
console.log($momentTest);  