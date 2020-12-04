//Loading the document, the localStorage items will be placed into their respective divs
$(document).ready(() => {
    for (let j = 9; j <= 16; j++) {
        if (localStorage.getItem(`event${j}`)) {
            let savedEvent = localStorage.getItem(`event${j}`);
            $(`textarea#text-area-${j}`).text(savedEvent);
        }
    }
})

//Selecting the <p> in the header with the currentDay id
const $currentDayTime = $('#currentDay');

//Setting the Current Date and Time display in the <header>
let $currentDateTime = moment().format('MMMM Do YYYY, h:mm a');
$currentDayTime.text($currentDateTime);

let $currentTime = moment().format('LT');

//Assigning background colours to the event sections based on the time
var $m = moment().format('HH');


//Assigning background colours to the event sections based on the time
for (let i = 9; i <= 16; i++) {
    let selection = `div#event-display-${i}`;

    if ($m == i) {
        $(selection.toString()).css('background-color', 'rgba(63, 232, 148, 0.4)');
    } else if ($m > i) {
        $(selection.toString()).css('background-color', 'rgba(245, 86, 112, 0.4)');
    } else {
        $(selection.toString()).css('background-color', 'rgba(63, 114, 232, 0.4)');
    }
};

//Assigning event listeners to the icons
for (let j = 9; j <= 16; j++) {
    let $selectedIcon = `button#save-button-${j}`;
    let $selectedTextArea = `textarea#text-area-${j}`;
    let userText;
    var hasTyped = false;

    $($selectedTextArea.toString()).keyup(() => {
        hasTyped = true;
        userText = $($selectedTextArea.toString()).val();
    })

    $($selectedIcon.toString()).on('click', () => {
        if (!userText && !hasTyped) {
            console.log('No text entered - this click will not register')
            return;
        } else {
            localStorage.setItem(`event${j}`, userText);
        }
    })
}

//All events will be wiped at the end of the day
if ($m > 16) {
    for (let j = 9; j <= 16; j++) {
        $(`textarea#text-area-${j}`).text('');
        localStorage.removeItem(`event${j}`);
    }
};


