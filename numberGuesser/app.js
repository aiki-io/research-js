const getRandomNum = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
};


const minVal = 1;
const maxVal = 10;
let winningNum = getRandomNum(minVal, maxVal);
let guessesLeft = 3;
let playAgain = false;



$(() => {

    const $game = $('#game');
    const $minNum = $('#min-num');
    const $maxNum = $('#max-num');
    const $guessBtn = $('#guess-btn');
    const $guessInput = $('#guess-input');
    const $message = $('.message');

    $minNum.text(minVal);
    $maxNum.text(maxVal);

    const gameOver = (msg, won) => {
        $guessInput.attr('disabled', 'disabled');
        $guessInput.css('border-color', won ? 'green' : 'red');
        $message.text(msg);
        $message.css('color', won ? 'green' : 'red');

        $guessBtn.val('Play again?');
        playAgain = true;
    };

    $guessBtn.click((e) => {
        if (playAgain) {
            window.location.reload();
        }
        let guess = parseInt($guessInput.val());
        if (isNaN(guess) || guess < minVal || guess > maxVal) {
            let msg = `Please enter the number between ${minVal} and ${maxVal}`;
            $message.text(msg);
            $message.css('color', 'red');
        }
        guessesLeft -= 1;
        if (guess === winningNum) {
            gameOver(`${winningNum} is correct. You win!`, true);
        } else {
            if (guessesLeft === 0) {
                gameOver(`Game over. You lost! The correct number was ${winningNum}`, false);
            }
            else {
                $guessInput.val('');
                $message.text(`Wrong guess. You have ${guessesLeft} guesses left`, 'red');
                $guessInput.css('border-color', 'red');
            }
        }


    });
});