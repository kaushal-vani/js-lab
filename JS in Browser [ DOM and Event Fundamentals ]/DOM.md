# DOM => Document Object Model

* Structured representation of HTML
* allows java Script to access HTML elements and css styles   to manipulate them
* Each DOM Tree has aentry point called as Document, document.querySelector()
* The tree has relationship as parent , child and sibling.
* First child element of document is HTML element.HTML is the root element of all html documents. and child element of HTML is Head and Body.
* It not only have element nodes , but also text nodes [ where ever is on the html documents should also be in the DOM ]
* DOM is not part of JavaScript. DOM is part of web API
* Timer , Fetch is also part of Web API

## Selecting and Manipulating Elements

* Using document.querySelector(), we can select any class, id in the html and see the value of it
* For Example
<!-- document.querySelector().textContent
HTML: 
<p class="paragraph">hello, have a nice day . good luck</p>

Java Script:
document.querySelector(".paragraph").textContent => to see the output of the selected element
document.querySelector(".paragraph").textContent = "HI" => to maipulate the output of the selected element
-->
* textContent is used to select or manipulate the text in HTML,
where as value is used to select or manipulate the value entered in Input field of HTML.
* For Example
<!-- document.querySelector().value
HTML: 
<input type="number" class="guess/>

Java Script:
document.querySelector(".guess").value => to see the output of the selected element
document.querySelector(".guess").value = "HI" => to maipulate the output of the selected element
-->

### Handling Click Events

* Events are used in Buttons as they handle events like click
* Event Listener: An event listener is a function in JavaScript that waits for an event to occur then responds to it
* Most used Event Listener is [ addEventListener ]
* For Example
<!-- document.querySelector().addEventListener()
HTML: 
<button class="btn again">Again..</button>
<button class="btn check">check !</button>

Java Script:
btn is a generic class that is used in all button but check is a specific class , thus using check
document.querySelector(".check").addEventListener("click", function() {
    console.log(documet.querySelector(".guess").value)
}) => to see the output of the selected element
-->

#### Implementing the Game Logic ( Guess My Number )

* So the game logics like generating random number is done using Math.random, Math.Trunc
* logic for checking if the secret number and the number entered matches is being handled
* if number enter and secret number doest not matches , the scoe should reduce . logic ofr that is handled
* text content for each guess will change based on its value with that of secret number

##### Manipulating CSS Styles

* style is used to make changes in JS using querySelector
* For Example
<!-- document.querySelector().style
HTML: 
<div class="greet">hello</div>

Java Script:
document.querySelector(".greet").style.backgroundColor = "#FFFFFF" => The styling mentioned should be in a string format.

-->
###### Implementing Highscores

* The high score logic is implemented.

###### Refactoring of Code DRY

* Refactored the code of the game using Ternary Operator [?:]

###### QuerySelctorAll

* it is used to assign a particular set of changes with same class name

<!-- document.querySelectorAll().style
HTML: 
<button class="btn again">Again..</button>
<button class="btn check">check !</button>

Java Script:
document.querySelectorAll(".btn").style.backgroundColor = "#FFFFFF" => It will be applied to all butoon with btn class
-->

###### classList

* it is used to add a class or remove a class or check if it contains a class associated with it.

<!-- document.querySelectorAll().classList
HTML: 
<button class="btn again">Again..</button>
<button class="btn check">check !</button>

Java Script:
document.querySelectorAll(".btn").classList.remove('again') => the class entered should be without [ . ]
document.querySelectorAll(".btn").classList.add('again')
document.querySelectorAll(".btn").classList.contains('again')

-->

###### keyBoard Events

* there are three types of key events that can be used
* keyup
* keydown
* keypress
<!-- document.querySelectorAll().addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        console.log("Enter is pressed");
    }
})
-->
