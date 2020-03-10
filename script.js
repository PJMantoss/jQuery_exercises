//Q1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");

//Q2.Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head). 
$("article img").addClass("image-center");

//Q3.Remove the last paragraph in the article.
$("p").eq(5).remove();

//OR
$("article p:last-child").remove();

//Q4.Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
$("#title").css("font-size", Math.floor(Math.random() * 101))

//Q5.Add an item to the list; it can say whatever you want.
let $newList = $("<li>");
$newList.text("I love puppies!");
$("ol").append($newList);

//Q6.Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$("aside").empty();
let $newP = $("<p>");
$newP.text("Apologies! The previous List was a mistake.");
$("aside").append($newP);

//Q7.When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + blue + "," + green + ")");
})

//Q8. Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on("click", function(e){
    $(e.target).remove();
})
})