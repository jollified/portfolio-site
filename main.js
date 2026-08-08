var c = false
const cursor = document.getElementById("blinking-cursor");
const stdout = document.getElementById("cmd-output")

setInterval(cursor_blink, 1000);
function cursor_blink() {
    c = !c

    if (c == true) {
        cursor.style.backgroundColor = "#00000000";
    } else {
        cursor.style.backgroundColor = "#ffffffaf";
    }
}

