/**
 * Returns a random answer from the array
 * when the user hits the submit button
 */
function response() {
    alert("Remember don't base important life decisions on these answers, this is just for fun!");
    var list = [
        "100% Yes",
        "The odds are in your favour!",
        "I'm surprised it hasn't happened already",
        "Absolutely, positively yes!",
        "If you believe it, you can achieve it",
        "Go for it, you've got this",
        "I've never been surer",
        "You can bet the house on it",
        "Most assuredly!",
        "All signs point to yes",
        "Error: 404, prediction not found",
        "My sources say maybe",
        "The future is uncertain at this time",
        "My prediction is currently unavailable",
        "The future is unclear, try again later",
        "Not a chance my friend!",
        "I can't see this happening",
        "Not even if you lived to a thousand",
        "Maybe try being a little more realistic",
        "Computer says no",
    ];
var number = Math.floor(Math.random()*20);

document.getElementById("response").innerHTML = list[number];
}

function toggleMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}