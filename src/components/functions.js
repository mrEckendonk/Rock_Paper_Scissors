function rpsGame(yourChoise) {
    console.log(yourChoise);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoise(number) {
    return ['rock', 'paper', 'scissors'][number];
}