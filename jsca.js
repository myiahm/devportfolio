const cards = [
    {cardNumber: 6, type: 'h'},
    {cardNumber: 9, type: 'd'},
    {cardNumber: 2, type: 'h'},
    {cardNumber: 9, type: 'h'},
    {cardNumber: 14, type: 'h'},
    {cardNumber: 6, type: 'c'},
    {cardNumber: 2, type: 'd'},
    {cardNumber: 9, type: 's'},
    {cardNumber: 12, type: 'h'},
    {cardNumber: 10, type: 'c'},
    {cardNumber: 14, type: 'c'},
    {cardNumber: 7, type: 'd'},
    {cardNumber: 3, type: 's'},
    {cardNumber: 8, type: 'd'},
    {cardNumber: 12, type: 's'},
    {cardNumber: 7, type: 's'},
    {cardNumber: 7, type: 'c'},
    {cardNumber: 14, type: 'd'},
    {cardNumber: 11, type: 'c'},
    {cardNumber: 10, type: 's'},
    {cardNumber: 11, type: 'd'},
    {cardNumber: 4, type: 'd'},
    {cardNumber: 2, type: 's'},
    {cardNumber: 7, type: 'h'},
    {cardNumber: 14, type: 's'},
    {cardNumber: 10, type: 'h'},
    {cardNumber: 5, type: 'c'},
    {cardNumber: 12, type: 'c'},
    {cardNumber: 6, type: 's'},
    {cardNumber: 5, type: 's'},
    {cardNumber: 12, type: 'd'},
    {cardNumber: 4, type: 'h'},
    {cardNumber: 11, type: 'h'},
    {cardNumber: 13, type: 'c'},
    {cardNumber: 5, type: 'h'},
    {cardNumber: 6, type: 'd'},
    {cardNumber: 13, type: 's'},
    {cardNumber: 13, type: 'd'},
    {cardNumber: 8, type: 'c'},
    {cardNumber: 4, type: 's'},
    {cardNumber: 13, type: 'h'},
    {cardNumber: 2, type: 'c'},
    {cardNumber: 8, type: 's'},
    {cardNumber: 10, type: 'd'},
    {cardNumber: 3, type: 'c'},
    {cardNumber: 3, type: 'h'},
    {cardNumber: 11, type: 's'},
    {cardNumber: 8, type: 'h'},
    {cardNumber: 9, type: 'c'},
    {cardNumber: 5, type: 'd'},
    {cardNumber: 3, type: 'd'},
    {cardNumber: 4, type: 'c'}];


var player1Deck = [];   // declaring empty array for deck player ones deck of cards
var player2Deck = [];// declaring empty array for deck player ones deck of cards

player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);

var p1score, p2score = 0;

function randomShuffle() {


    for (let i = 0; i < 10000; i++) {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;
    }
    player1Deck = cards.slice();   // splitting the deck
    player2Deck = player1Deck.splice(1, 26);

    p1score = 0;
    p2score = 0;
    var scorep1 = document.getElementById("score1");
    var scorep2 = document.getElementById("score2");

    // for (var i = 0; i < player1Deck.length; i++) {
    //     // document.getElementById("cards").innerText= player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber;
    //     document.getElementById("cards").innerText= "Here"
    //
    //     if (player1Deck[i].cardNumber < player2Deck[i].cardNumber) {
    //         document.getElementById("tie").innerHTML = "Player 2 is the WINNER!";
    //         document.getElementById("score1").innerHTML = player1Deck[i].cardNumber;
    //         document.getElementById("cards").innerHTML= player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber;
    //         console.log(player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber);
    //
    //         p2score++;
    //         console.log("This is player 2 score: "+ p2score)
    //     }
    //     else if (player1Deck[i].cardNumber > player2Deck[i].cardNumber) {
    //         document.getElementById("tie").innerHTML = "Player 1 is the WINNER!";
    //         document.getElementById("score2").innerHTML = player2Deck[i].cardNumber;
    //         document.getElementById("cards").innerHTML= player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber;
    //
    //
    //
    //
    //         console.log(player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber);
    //         p1score++;
    //         console.log("This is player 1 score: "+ p1score)
    //     } else {
    //         document.getElementById("tie").innerHTML = "Tie";
    //
    //     }
    // }
    let i = 0;
    setInterval(function () {
        // document.getElementById("cards").innerText= player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber;

        if (player1Deck[i].cardNumber < player2Deck[i].cardNumber) {
            document.getElementById("tie").innerHTML = "Player 2 is the WINNER!";
            document.getElementById("score1").innerHTML = player1Deck[i].cardNumber;
            document.getElementById("score2").innerHTML = player2Deck[i].cardNumber;
            console.log(player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber);

            p2score++;
            console.log("This is player 2 score: " + p2score)
        }
        else if (player1Deck[i].cardNumber > player2Deck[i].cardNumber) {
            document.getElementById("tie").innerHTML = "Player 1 is the WINNER!";
            document.getElementById("score1").innerHTML = player1Deck[i].cardNumber;
            document.getElementById("score2").innerHTML = player2Deck[i].cardNumber;
            console.log(player1Deck[i].cardNumber + " - " + player2Deck[i].cardNumber);
            p1score++;
            console.log("This is player 1 score: " + p1score)
        } else {
            document.getElementById("tie").innerHTML = "Tie";

        }

        i++
    }, 1000)
}
    console.log("Player 1: " + p1score + " Player 2: " + p2score);
    // scorep1.innerText="Player1 won "+p1score ;
    // scorep2.innerText="Player2 won "+p2score;



function resetFunction() {
    for (var i = 0; i < 10000; i++) {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;

        player1Deck = cards.slice();
        player2Deck = player1Deck.splice(1, 26);
        var scorep1 = document.getElementById("score1");
        var scorep2 = document.getElementById("score2");
        scorep1 = 0;
        scorep2 = 0;
    }
}

var button = document.getElementById("button1");
button.addEventListener("click", randomShuffle);

var buttonReset = document.getElementById("resetButton");
buttonReset.addEventListener("click", resetFunction);
