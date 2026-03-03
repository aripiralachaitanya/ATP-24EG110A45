const temperatures = [32, 35, 28, 40, 38, 30, 42];
/*   1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
// 1. filter() temperatures above 35
let above35 = temperatures.filter(temp => temp > 35);
console.log(above35);

// 2. map() to convert all temperatures from Celsius → Fahrenheit
let fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);

// 3. reduce() to calculate average temperature
let average = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log(average);

// 4. find() first temperature above 40
let above40 = temperatures.find(temp => temp > 40);
console.log(above40);

// 5. findIndex() of temperature 28
let index28 = temperatures.findIndex(temp => temp === 28);
console.log(index28);