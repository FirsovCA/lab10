let clickCount = 0;

function countClick() {
    clickCount++;
    document.getElementById("clickCount")
        .innerText = 'You have clicked ' + clickCount + ' times';
}