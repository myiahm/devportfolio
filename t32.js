var bigToe = document.getElementsByClassName('toe');
var player_one = 1;
var moveCount = 0;

for(var i =0; i<bigToe.length; i++) {
    bigToe[i].addEventListener('click', clickedSquare);
}



function clickedSquare()
{
    if (player_one === 1) {

        // bigToe[i].addEventListener('click', function () {
        if (  this.innerHTML === "") {
            this.innerHTML = "X";
            this.setAttribute('disabled', 'disabled');
            player_one = 2;
            moveCount++;
            if(!checkWinner()){
                isCat();
            }
        }
        }

    else
    {

    if (player_one === 2) {
        if (this.innerHTML === "") {
            this.innerHTML = "O";
            this.setAttribute('disabled', 'disabled');
            player_one = 1
            moveCount++;
            if(!checkWinner()){
                isCat();
            }



        }
    }
    }
}




function checkWinner() {
    console.log('Checking for winner');
    if((bigToe[0].innerText==bigToe[1].innerText &&bigToe[1].innerText ==bigToe[2].innerText && bigToe[2].innerText==="X")
        ||(bigToe[3].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[5].innerText && bigToe[5].innerText==="X")
        ||(bigToe[6].innerText==bigToe[7].innerText &&bigToe[7].innerText ==bigToe[8].innerText && bigToe[8].innerText==="X")
        ||(bigToe[0].innerText==bigToe[3].innerText &&bigToe[3].innerText ==bigToe[6].innerText && bigToe[6].innerText==="X")
        ||(bigToe[1].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[7].innerText && bigToe[7].innerText==="X")
        ||(bigToe[2].innerText==bigToe[5].innerText &&bigToe[5].innerText ==bigToe[8].innerText && bigToe[8].innerText==="X")
        ||(bigToe[0].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[8].innerText && bigToe[8].innerText==="X")
        ||(bigToe[2].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[6].innerText && bigToe[6].innerText==="X"))
    {
        alert("X wins");
        return true;
    }
    else if((bigToe[0].innerText==bigToe[1].innerText &&bigToe[1].innerText ==bigToe[2].innerText && bigToe[2].innerText==="O")
        ||(bigToe[3].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[5].innerText && bigToe[5].innerText==="O")
        ||(bigToe[6].innerText==bigToe[7].innerText &&bigToe[7].innerText ==bigToe[8].innerText && bigToe[8].innerText==="O")
        ||(bigToe[0].innerText==bigToe[3].innerText &&bigToe[3].innerText ==bigToe[6].innerText && bigToe[6].innerText==="O")
        ||(bigToe[1].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[7].innerText && bigToe[7].innerText==="O")
        ||(bigToe[2].innerText==bigToe[5].innerText &&bigToe[5].innerText ==bigToe[8].innerText && bigToe[8].innerText==="O")
        ||(bigToe[0].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[8].innerText && bigToe[8].innerText==="O")
        ||(bigToe[2].innerText==bigToe[4].innerText &&bigToe[4].innerText ==bigToe[6].innerText && bigToe[6].innerText==="O"))
    {
        alert("O wins");
        return true;
    }

}

function isCat() {
    console.log("Checking for a CAT game");
    // for (var i = 0; i < 9; i++) {
    //     if(bigToe[i]== 'X' || bigToe[i] == 'O'){
    //         alert('The game is CAT');
    //     }
// }
    if(moveCount === 9){
        alert('The game is CAT');
    }

}