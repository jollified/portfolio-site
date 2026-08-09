var c = false;
const cursor = document.getElementById("blinking-cursor");

setInterval(cursor_blink, 1000);

path = "J:\\portfolio"

function cursor_blink() {
    c = !c

    if (c == true) {
        cursor.style.backgroundColor = "#00000000";
    } else {
        cursor.style.backgroundColor = "#ffffffaf";
    }
}



