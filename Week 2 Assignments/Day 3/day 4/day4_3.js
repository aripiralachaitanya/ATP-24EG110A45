/*Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays*/

let fruits = ["apple", "banana"];

// Create a new array moreFruits and copy all fruits from fruits
let moreFruits = [...fruits];
// Add "orange" at the end using spread
moreFruits = [...moreFruits, "orange"];
// Print both arrays
console.log("Fruits:", fruits);
console.log("More Fruits:", moreFruits);


/* Exercise 2: Update User Object
                        
                        Goal: Learn object cloning & adding new property
                        
                        You are given:
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                        
                        
                        
                        Tasks
                        
                              -> Create a new object updatedUser
                              
                              -> Copy all properties from user
                              
                              -> Add a new property age: 25
                              
                              -> Print both objects
*/

let user = {
  name: "Ravi",
  city: "Hyderabad"
};
// Create a new object updatedUser and copy all properties from user
let updatedUser = { ...user };
// Add a new property age: 25
updatedUser.age = 25;
// Print both objects
console.log("User:", user);
console.log("Updated User:", updatedUser);


//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));