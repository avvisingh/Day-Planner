const $currentDayTime = $('#currentDay');

let currentTime = moment().format('MMMM Do YYYY, h:mm a');
console.log(currentTime);

$currentDayTime.text(currentTime);