var i = 0;
var greetingsTxt = "";  //variable that when called gives message
var speed = 50;
var justLandedVar = true;

// This function will get called when the page loads
function justLanded() {
    justLandedVar = true;
    typeWriter('Nice to meet you. What is your name?');
}

// Print the second message
function readySecondMsg()
{
    justLandedVar = false;
    let visitorName = document.getElementById("userEntryArea").value;
    // window.alert(visitorName + ' pressed Enter');
    document.getElementById("myWords").innerHTML = "";

    // Clear welcome message and type next one
    resetTypeWriter();
    typeWriter("Hello "+ visitorName + "! Thank You for visiting my page!");
}

/* The speed/duration of the effect in milliseconds */
/* Types out the provided string like a typewriter */
function typeWriter(msgToPrint)
{
    greetingsTxt = greetingsTxt === "" ? msgToPrint : greetingsTxt;

    if (i < greetingsTxt.length)
    {
        document.getElementById("myWords").innerHTML += greetingsTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);     // if statement that gets the txt variable to display across the screen at a set speed
    }
    else
    {
        if (justLandedVar) { // If visitor just arrived
            document.getElementById("userEntryArea").focus(); // Move cursor to text field to get visitor name

        }else {
            window.location.replace("index2.html"); // sending user to my second page after they eneter their name and second message displays
        }

    }

}

// Reset the typewriter object (clear text etc)
function resetTypeWriter() {
    i = 0;
    greetingsTxt = "";
    document.getElementById("myWords").innerHTML = "";
}

// This function gets called and passed a keyDown event when key pressed, and checks if Enter pressed
function checkEnter(e)
{
    let characterCode = e.key;

    if (characterCode === 'Enter')
    {
        if (justLandedVar)
        {
            justLandedVar = false;
            readySecondMsg();
        }

        return true;
    }
    else
    {
        return false;
    }
}
