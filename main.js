var c = false;
const cursor = document.getElementById("blinking-cursor");
const output = document.getElementById("cmd-output");
const input = document.getElementById("cmd-in")

var path = "J:\\portfolio"


setInterval(cursor_blink, 1000);
print("string1")

output.textContent = ""
input.value = ""
path = "J:\\portfolio"

function print(msg, newline = true) {
    var text = output.innerHTML
    if (newline && text != "") {
        text += "<br>"
    }
    text += msg

    output.innerHTML = text
    window.scrollTo({ top: document.body.scrollHeight })
}




function cursor_blink() {
    c = !c

    if (c == true) {
        cursor.style.backgroundColor = "#00000000";
    } else {
        cursor.style.backgroundColor = "#ffffffaf";
    }
}

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        print(path + ">" + input.value)
        parse_command(input.value)
        input.value = ""
    }
});




