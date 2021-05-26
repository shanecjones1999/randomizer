function randomNumber() {
    document.getElementById('number').innerHTML = Math.floor(Math.random() * 100 + 1); // Gets the link
}

function randomCoin() {
    let coinFlip = Math.floor(Math.random() * 2 + 1);
    let result = "Heads";
    if (coinFlip === 1) {
        result = "Heads"
    } else {
        result = "Tails"
    }
    document.getElementById('coin').innerHTML = result
}

function randomColor() {
    let color;
    switch (Math.floor(Math.random() * 7)) {
        case 0:
            color = "Red";
            break;
        case 1:
            color = "Orange";
            break;
        case 2:
            color = "Yellow";
            break;
        case 3:
            color = "Green";
            break;
        case 4:
            color = "Blue";
            break;
        case 5:
            color = "Indigo";
            break;
        case 6:
            color = "Violet";
    }
    document.getElementById('color').innerHTML = color
}