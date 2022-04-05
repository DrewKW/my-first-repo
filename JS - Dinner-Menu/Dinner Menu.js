/* Create a Dinner Menu
Directions

Create an array that contains six types of unique meats.
Create a second array that contains four types of unique vegetables.
Create a third array that contains five types of unique desserts.
Remove the last element from the meats array created in Step 1.
Remove the last element from the vegetables array created in Step 2.
Create a string variable that contains one item from the dessert array.
Combine the meat array, the vegetable array, and dessert value into a new array named "mondayMenu."
Output the contents of the mondayMenu array.
*/

/* Creating an array of 6 unique meats */
let meats = [];
meats.push("Rabbit");
meats.push("Gazelle");
meats.push("Deer");
meats.push("Buffalo");
meats.push("Turkey");
meats.push("Elk");

/* Creating an array of 6 unique vegetables */
let vegetables = [];
vegetables.push("Asparagus");
vegetables.push("Beets");
vegetables.push("Broccoli");
vegetables.push("Pickles");

/* Creating an array of 5 unique desserts */
let desserts = [];
desserts.push("Baklava");
desserts.push("Flan");
desserts.push("Vanilla");
desserts.push("Raspberry");
desserts.push("Tres Leches");

/* Removing the last element from the meat array */
meats.pop(); /* Removes Elk */

/* Removing the last element from the vegetables array */
vegetables.pop(); /* Removes Tres Leches */

/* Creating a string variable containing one dessert */
let dessert = desserts[3];

/* Combining meat and vegetables array */
var mondayMenu = meats.concat(vegetables);

/* Add a dessert value into new array, mondayMenu */
mondayMenu.push(desserts);  /* Raspberry */

/* Outputting the mondayMenu */
console.log("Monday's Menu: " + mondayMenu);