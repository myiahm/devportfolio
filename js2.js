// create a event listener for button to send user back to previous page
var squares= document.querySelectorAll("td");





var theButton3 = document.getElementById("button3");
theButton3.addEventListener("click", clearBoard);// that when clicked sets value of the first two buttons back at 0

//
// function resetFunction()
//
// {
//     a = 0;
//     // document.getElementById("RESET").innerHTML = a;
//     clearBoard();
// }

function clearBoard()
{
    for  (i=0;i<squares.length;i++)
    {
        squares[i].innerText="";
    }
    moveCount = 0;
}