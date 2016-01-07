var counter = 0;
var previousNum = 0;

function randomNumber() {
    //make a random number
    var numRand = Math.floor(Math.random() * 101);
    return numRand;
}

function startGame() {
    //get a random number
    var hotNumber = randomNumber();
    return hotNumber;
}

function validateNumber(guessedNumber) {
    if (guessedNumber % 1 !== 0) {
        alert('You must enter an integer value!!');
        $('#userGuess').val('');
        return false;
    } else {
        storeNumber(guessedNumber)
    }

}

function storeNumber(guessedNumber) {
    //get the value of the input box
    $("#guessList").append('<li>' + guessedNumber + '</li>');

}

//compare the number guessed to the random number and display a result in h2#feedback
function compare(targetNum, guessNum) {
    if ((guessNum > (targetNum + 50)) || (guessNum < (targetNum - 50))) {
        $('h2#feedback').text('Ice Cold');
        return false;
    } else if ((guessNum > (targetNum + 30)) || (guessNum < (targetNum - 30))) {
        $('h2#feedback').text('Cold');
        return false;
    } else if ((guessNum > (targetNum + 20)) || (guessNum < (targetNum - 20))) {
        $('h2#feedback').text('Warm');
        return false;
    } else if ((guessNum > (targetNum + 10)) || (guessNum < (targetNum - 10))) {
        $('h2#feedback').text('Hot');
        return false;
    } else if ((guessNum > (targetNum + 1)) || (guessNum < (targetNum - 1))) {
        $('h2#feedback').text('Very Hot');
        return false;
    } else if (guessNum == targetNum) {
        $('h2#feedback').text('You Won');
        return false;
    }

}

function getCloser(targetNum, guessNum, previousNum) {
    if (counter == 0) {
        return false;
    } else {
        if (guessNum == targetNum) {
            $('#cars').text('');
            return false;
        } else {
            var prevDiff = parseInt(Math.abs(targetNum - previousNum));
            var guessDiff = parseInt(Math.abs(targetNum - guessNum));

            if (prevDiff > guessDiff) {
                $('#cars').text('getting warmer...');
                return false;

            } else if (prevDiff < guessDiff) {
                $('#cars').text('getting colder...');
                return false;

            } else if (prevDiff == guessDiff) {
                $('#cars').text('not warmer or colder');
                return false;

            }
        }

    }


}


function countUp() {
    counter++;
    $('#count').text(counter);
}


$(document).ready(function () {
    var targetNum = startGame();

    //on clicking #guessbutton, save the number entered by the player

    $("#guessButton").click(function () {
        var guessNum = $('#userGuess').val();
        validateNumber(guessNum);
        compare(targetNum, guessNum);
        getCloser(targetNum, guessNum, previousNum);
        countUp();
        previousNum = guessNum;

    });
    //on clicking #guessbutton, save the number entered by the player
    $("a.new").click(function () {
        newGame();
    });



    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    function newGame() {
        console.log('new game');
        //reset everything back to zero
        document.location.reload(true);
    }

});
