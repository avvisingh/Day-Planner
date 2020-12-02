//Selecting the <p> in the header with the currentDay id
const $currentDayTime = $('#currentDay');

//Setting the Current Date and Time display in the <header>
let $currentDateTime = moment().format('MMMM Do YYYY, h:mm a');
$currentDayTime.text($currentDateTime);
console.dir($currentDateTime);

let $currentTime = moment().format('LT');
console.log($currentTime);

//Assigning background colours to the event sections based on the time
var $m = moment().format('HH');
console.log(`m = ${$m}`);

// const A = 10;
// const selection = `div#time-display-${A}`;
// console.log(selection);
// $(selection.toString()).html('<p>Avvi</p>');


//Assigning background colours to the event sections based on the time
var i;
for (i = 9; i <= 16; i++) {
    let selection = `div#event-display-${i}`;
    console.log(selection);

    if ($m == i) {
        $(selection.toString()).css('background-color', 'rgba(63, 232, 148, 0.4)');
    } else if ($m > i) {
        $(selection.toString()).css('background-color', 'rgba(245, 86, 112, 0.4)');
    } else {
        $(selection.toString()).css('background-color', 'rgba(63, 114, 232, 0.4)');
    }
};


