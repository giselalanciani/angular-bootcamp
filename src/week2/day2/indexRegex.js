(function(){
    "use strict";
    // This will always pass
    var emailRegex = new RegExp(/\S+@\S+\.\S+/),
        result = prompt("Enter Your email", ""),
        valid = result.match(/\S+@\S+\.\S+/);

    if (valid) {
        alert("Email valid");
        console.log(`You entered: ${result}`);
    } else {
        alert("Email not valid");
        console.warn(`You entered: ${result} which is not an email`);
    }
})()
// <!-- Now it's your turn to make some changes
//     - Make a proper regex so the code works as expected

//     ****************************************************
//     ****               BONUS POINTS                 ****
//     ****    Show me something funny with a regex    ****
//     ****           use your imagination             ****
//     ****************************************************
// -->