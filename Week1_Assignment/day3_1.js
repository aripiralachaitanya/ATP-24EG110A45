const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let x = cart.filter((item) => item.inStock);
console.log(x);

// Use map() to create a new array with:  { name, totalPrice }
let y = cart.map((item) => {
  return {
    name: item.name,
    totalPrice: item.price * item.quantity
  };
});
console.log(y);

// Use reduce() to find grand total of the cart
let z = cart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log(z);

//Use find() to get details of "Mouse"
let a = cart.find((item) => item.name === "Mouse");
console.log(a);

//Use findIndex() to find the position of "Keyboard"
let b = cart.findIndex((item) => item.name === "Keyboard");
console.log(b);
