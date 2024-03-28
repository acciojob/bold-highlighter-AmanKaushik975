function highlight() {
    // Get all the <strong> elements
    let boldItems = document.getElementsByTagName('strong');

    // Loop through all the <strong> elements
    for(let i = 0; i < boldItems.length; i++) {
        // Change the color of the text to green
        boldItems[i].style.color = 'green';
    }
}

function return_normal() {
    // Get all the <strong> elements
    let boldItems = document.getElementsByTagName('strong');

    // Loop through all the <strong> elements
    for(let i = 0; i < boldItems.length; i++) {
        // Change the color of the text back to black
        boldItems[i].style.color = 'black';
    }
}
