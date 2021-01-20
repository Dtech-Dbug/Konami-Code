const pressed = []; // an array of keys pushed
const secretCode = 'prettify'

window.addEventListener('keyup' , (e)=>{
    console.log(e.key) // to check which key is pressed
    pressed.push(e.key)
    
    pressed.splice(-secretCode.length -1 , pressed.length-secretCode.length) // splicing from the back.

    //check if the pressed array has the secret code
    if(pressed.join('').includes(secretCode)){  // checking if the array after join and converted intoa string contains the secret code which will trigger a cornify.js art.
        console.log("Matched with secretCode")
        cornify_add()
    }
    console.log(pressed)
})