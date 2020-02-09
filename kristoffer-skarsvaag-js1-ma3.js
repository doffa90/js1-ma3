/*Question 1
Convert the function below to an arrow function:
function(a, b) {
    return a - b;
}*/

const sum = (a, b) => a - b;

/*Question 2
Make a call to the URL below, pass the JSON it returns to 
a function and inside that function loop through the 
results and log each game's name.
In the catch method of your code, redirect to error.html 
if there is an error.

https://api.rawg.io/api/games?genres=sports*/

fetch("https://api.rawg.io/api/games?genres=sports")
	.then(function(results) {
		return results.json();
	})
	.then(function(json) {
		for (let i = 0; i < json.results.length; i++) {
			console.log(json.results[i].name);
		}
	})

	.catch(function(error) {
		document.location.href = "error.html";
	});

/*Question 3
Replace the word cats with the word giraffes in the 
following sentence:

These cats are outrageous.*/

const paragraph = document.querySelector("p");
const replaceText = text.replace("cats", "giraffes");
paragraph.innerText = replaceText;
//somthing feels off about this code. and i get an error,
//but i dont see what im doing wrong.

/*Question 4
Given the URL below, write code that checks if there is a 
userId parameter in the query string.

If there is no userID parameter, redirect the browser to 
third.html.

If there is a userID parameter and its value is less 
than 10, redirect to first.html.

If there is a userID parameter and its value is 10 or 
greater, redirect to second.html.

https://my.site.com?userId=7 */

const queryString = document.location.search;
const parameter = new URLSearchParameter(queryString);

let userID;

if (parameter.has("userId")) {
	userID = parameter.get("userId");
}

if (userID < 10) {
	document.location.href = "first.html";
} else if (userID >= 10) {
	document.location.href = "second.html";
} else {
	document.location.href = "third.html";
}

/*Question 5
Write code that removes the button, and only the button, 
from its parent element in the HTML below:

<div class="container">
    <p>Lorem ipsum dolor</p>
    <button class="btn">Click me</button>
</div>*/

const container = documet.querySelector("container");
const button = document.querySelector(".btn");
container.removeChild(button);

/*Question 6
Create an li element with a text value of Parrots and a 
class of parrots.
Add the new item as the second item in the ul below 
(add it after Cows).

<ul class="animals">
    <li class="cows">Cows</li>
    <li class="elephants">Elephants</li>
</ul>*/

const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");
const list = document.createElement("li");
list.className = "parrots";
list.innerText = "Parrots";
cows.after(list);

/*Question 7
Make a call to the URL below and pass the JSON it returns 
to a function. Inside that function select the div from 
the HTML below and assign the rating property from the 
JSON object as it's text value.

In the catch method, log the error that may be returned.

https://api.rawg.io/api/games/3801
<div class="rating"></div>*/

const URL2 = "https://api.rawg.io/api/games/3801";

fetch(URL2)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		document.querySelector(".rating").innerText = json.rating;
	})
	.catch(function(error) {
		console.log(error);
	});
