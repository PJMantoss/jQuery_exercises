//Q1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
//Q2.Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head). 
$("article").addClass("image-center");
//Q3.Remove the last paragraph in the article.
$("p").eq(5).remove();
//Q4.Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.
$("#title").css("font-size", "(Math.floor(Math.random() * 101))px")
//Q5.Add an item to the list; it can say whatever you want.
let $newList = $("<li>");
$newList.text("I love puppies!");
$("ol").append($newList);
//Q6.Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$("aside").empty();
let $newP = $("<p>");
$newP.text("Apologies! The previous List was a mistake.");
})