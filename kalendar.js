$(document).ready(start);

function start() {
    for (let i=1; i<=12; i++) {
        createTableMonth(createCalendar(i), i);
    }

}

function createCalendar(month) {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), month-1, 1).getDay();
    let numOfDays = new Date(date.getFullYear(), month, 0).getDate();
    let kalendar = new Array(5);
    let i;
    for (i=0; i<5; i++) {
        kalendar[i] = new Array(7);
    }
    let j=0;
    let k=1;
    let day = 1;
    i=1;

    for (i=0; i<5; i++) {
        for (j=0; j<7; j++) {
            if (k++>=firstDay && day <= numOfDays) {
                kalendar[i][j] = day++;
            } else {
                kalendar[i][j] = null;
            }
        }
    }

    return kalendar;

}

const months = ["January", "February", "March", "April", "May", "Jun", "Jully", "August", "September", "October", "November", "December"];
const colors = ["Blue", "Yellow", "Red", "Orange", "Pink", "Green", "Cyan"];

function createTableMonth(kalendar, month) { 
    let randomColor = Math.floor(Math.random()*colors.length);
    let h = "<h2>"+months[month-1]+"</h2>"
    let table = "<table>";
    table +="<tr><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>Sun</td></tr>";
    let value;
    for (i=0; i<5; i++) {
        table+="<tr>";
        for (j=0; j<7; j++) {
            value = kalendar[i][j];
            if (value == null) {
                value = "";
            }
            table+="<td>"+value+"</td>";
        }
        table+="</tr>";
    }
    let div = "<div class=kalendarDiv></div>";

    // $(div).append(h).append(table);
    // $(table).addClass("kalendari");
    $("#kalendar").append("<div class='kalendarDiv'>"+h+table+"</div>");
    $("#kalendar h2").last().css("background-color", colors[randomColor]);
}