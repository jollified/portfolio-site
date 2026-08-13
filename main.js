const bday = dayjs('2009-08-12');
const years = dayjs().diff(bday, 'year');

const text = document.getElementById("desc")

if (years == 18 || years == 80) {
    text.innerHTML = "I'm an " + String(years) + " year old software/game developer<br>based in canada focused on creating fun<br>and satisfying experiences for people to enjoy."
}
else {
    text.innerHTML = "I'm a " + String(years) + " year old software/game developer<br>based in canada focused on creating fun<br>and satisfying experiences for people to enjoy."
}
