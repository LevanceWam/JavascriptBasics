var word = 'bottles';
var count = '99';

while (count > 0) {
    document.write(count + " " + word + " of beer on the wall. <br>");
    document.write(count + " " + word + " of beer,<br> ");
    document.write("Take one down, pass it around <br>");
    count = count -1;

    if(count > 0) {
        document.write(count + " " + word + " of beer on the wall <br>");
    } else {
        document.write("No more " + word + " of beer on the wall.");
    }
};


// This is the code in the console log that I transfered to the document.

// while (count > 0) {
//     console.log(count + " " + word + " of beer on the wall");
//     console.log(count + " " + word + " of beer, ");
//     console.log("Take one down, pass it around");
//     count = count -1;

//     if(count > 0) {
//         console.log(count + " " + word + " of beer on the wall");
//     } else {
//         console.log("No more " + word + " of beer on the wall.");
//     }
// };

