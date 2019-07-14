let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random()*(max-min+1)+min);
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    };
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, you win!`, 'green');
        playAgain();
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            playAgain();
        } else {
            gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left.`);
        }
    }
});

function playAgain(){
    guessInput.disabled = true;
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function gameOver(won, msg) {
    let color;
    won ? color = 'green' : color = 'red';

    guessInput.style.borderColor = color;
    setMessage(msg, color);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

