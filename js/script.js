/**
 * Created by Phirom Yim on 5/31/14.
 */


//  V A L I D A T I O N

var minimumCups = prompt("Please type how many cups of water you had to drink today:");

//validate that the user typed a number and didn't leave it blank

//isNan() = true if it is a text string and false if it not a number

while(isNaN(minimumCups && minimumCups === "")){//as long as this is not a number or a text string

    //re-prompt the user for a number
    minimumCups = prompt("Please type in a minimum NUMBER.");

}
var userInput = prompt("Do you think you drank enough water today? \nPlease type in Y or N");

 while(userInput != "Y" && userInput !="N" && userInput != "y" && userInput !="n" && userInput != "Yes" && userInput !="No" && userInput != "yes" && userInput !="no"){
 userInput = prompt("Please type in Y or N");//re-prompt for user input
 }

 //Create the function to give us a random number between those values

//anything created inside of a function unless you RETURN it
function waterMin(minimumCups){//parameters go here

    var requiredWater = Math.round(minimumCups - 8);//put Number in from will turn text string into number
    console.log(requiredWater);//print to console
    return requiredWater;//return value of function
}
//function call
//arguments go INSIDE of the () of a function call

//catch the returned value of our function
var results = waterMin(minimumCups);//get sent inside of function
console.log(results);//print result to console
alert("You had" + results + " cup(s) of water today!");//alert results with concatenation




