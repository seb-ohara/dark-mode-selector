const modeButton = document.getElementById("button1");
const backgColor = document.querySelector("body");

function colorMode (){
    //get computed style allows you to set the styles for CSS that is in a different file
    //however this method only takes the input of a color as an RGB value
    if (getComputedStyle(backgColor).backgroundColor === 'rgb(245, 245, 220)'){
        backgColor.style.backgroundColor = 'black';
        modeButton.style.backgroundColor = 'beige';
        modeButton.style.color = 'black';
    } else if (getComputedStyle(backgColor).backgroundColor === 'rgb(0, 0, 0)'){
        backgColor.style.backgroundColor = 'beige';
        modeButton.style.backgroundColor = 'black';
        modeButton.style.color = 'beige';
    }
}

modeButton.addEventListener('click',colorMode);

//This was awesome learning, you basically coded the entire thing by yourself, you just use
//the wrong method to change the background color but now you have learnt what you need to do