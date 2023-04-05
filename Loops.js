// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// for-in loop (for objects)
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for-of loop (for arrays)
let hobbies = ["reading", "cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}
