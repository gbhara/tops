// let x = "bharatgoyal";
// let y = new Map();

// for (let i = 0; i < x.length; i++) {
//     if (y.has(x[i])) {
//         // Increment the count if the character exists in the map
//         y.set(x[i], y.get(x[i]) + 1);
//     } else {
//         // Set the initial count to 1 if the character does not exist
//         y.set(x[i], 1);
//     }
// }

// console.log(y.length);
let map = new Map();
map.set("a", "bharat");
map.set("c", 10);
map.set("g", "goyal");
console.log(map)

// Convert Map to an array of entries (key-value pairs)
let mapArray = Array.from(map);
console.log(mapArray)

// Loop through the array by index
for (let i = 0; i < mapArray.length; i++) {
    let [key, value] = mapArray[i]; // Destructuring the entry
    console.log(`Index ${i}: Key = ${key}, Value = ${value}`);
}


