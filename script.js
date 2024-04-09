// Explanation:
// Calculating Plant Growth:

// We're given that there are 20 plants initially, and each week the number of plants doubles.
// So, to predict the plant growth after a specific number of weeks, we can use the formula:
// plantCount = initialPlantCount * Math.pow(2, weeks).
// Here, initialPlantCount is the starting number of plants, and weeks is the number of weeks.
// Control Flow for Decision Making:

// We're required to make decisions on whether to prune, monitor, or plant more plants based on the plant count after a certain number of weeks.
// We calculate the percentage of the garden's capacity occupied by the plants using the formula: percentage = (plantCount / maxCapacity) * 100.
// Then, we use control flow to determine the decision based on the percentage:
// If the percentage is greater than 80%, we prune.
// If the percentage is between 50% and 80%, we monitor.
// If the percentage is less than 50%, we plant more.
// Part 1 Execution:

// We iterate over 1, 2, and 3 weeks, calculate the plant growth, and determine the decision using the control flow.
// Part 2: Additional Space and Expanded Garden Radius:

// We're asked to determine the additional space required if starting with 100 plants and not pruning for 10 weeks.
// First, we calculate the total space required for the plants after 10 weeks using the growth formula.
// Then, we subtract the maximum capacity of the original garden to find the additional space required.
// Finally, we calculate the radius of the expanded garden using the formula for the area of a circle.
// Part 3: Error Handling:

// We're asked to handle errors if the space is not enough to hold the initially provided number of plants.
// We use a try-catch block to catch the error thrown if the initial plant count exceeds the capacity of the garden.
// Overall, the solution combines mathematical calculations with control flow and error handling to address each part of the problem effectively.

// Constants
const PI = 3.1415;
const radius = 5; // meters
const minSpacePerPlant = 0.8; // square meters
const initialPlantCount = 20;
const maxCapacity = PI * radius * radius / minSpacePerPlant;

// Function to calculate plant growth after a specific number of weeks
function calculatePlantGrowth(weeks) {
    let plantCount = initialPlantCount * Math.pow(2, weeks);
    return plantCount;
}

// Function to determine whether to prune, monitor, or plant more plants
function controlPlantGrowth(weeks) {
    let plantCount = calculatePlantGrowth(weeks);
    let percentage = plantCount / maxCapacity * 100;

    if (percentage > 80) {
        return "Prune";
    } else if (percentage >= 50 && percentage <= 80) {
        return "Monitor";
    } else {
        return "Plant more";
    }
}

// Part 1: Results for 1, 2, and 3 weeks of growth
for (let i = 1; i <= 3; i++) {
    let growth = calculatePlantGrowth(i);
    let decision = controlPlantGrowth(i);
    console.log(`Week ${i}: ${growth} plants. Decision: ${decision}`);
}

// Part 2: Amount of additional space and radius of expanded garden
const startingPlantCount = 100;
const weeks = 10;
let additionalSpaceRequired = calculatePlantGrowth(weeks) * minSpacePerPlant - maxCapacity;
let expandedRadius = Math.sqrt((maxCapacity + additionalSpaceRequired) / PI);
console.log(`Additional space required after ${weeks} weeks with ${startingPlantCount} plants: ${additionalSpaceRequired} square meters.`);
console.log(`Radius of expanded garden: ${expandedRadius} meters.`);

// Part 3: Error handling
try {
    if (calculatePlantGrowth(0) > maxCapacity) {
        throw new Error("Not enough space to hold the initially provided number of plants.");
    }
} catch (error) {
    console.error(error.message);
}




console.log('running');

// 1.Variables and Data Types
const myName = 'Taiwo';
console.log(myName);

// A. The basics
console.log("A. The basics:");
// Loop to print numbers from 0 to 10
console.log("Numbers from 0 to 10:");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Loop to print numbers from 10 to 400
console.log("Numbers from 10 to 400:");
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

// Loop to print every third number from 12 to 4000
console.log("Every third number starting with 12 and going no higher than 4000:");
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. Get even
console.log("\nB. Get even:");
// Loop to print even numbers within the range of 1 - 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " is an even number");
  }
}

// C. Give me Five
console.log("\nC. Give me Five:");
// Loop to print messages for numbers divisible by 5 and/or 3 within the range of 0 - 100
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("I found a " + i + ". High five! Three is a crowd");
  } else if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  } else if (i % 3 === 0) {
    console.log("I found a " + i + ". Three is a crowd");
  }
}

// D. Savings account
console.log("\nD. Savings account:");
// Loop to calculate the sum of numbers from 1 to 10
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log("Bank Account Balance (1-10): $" + bank_account);

// Bonus: Loop to calculate the sum of numbers from 1 to 100 multiplied by 2
let bonus_bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bonus_bank_account += i * 2;
}
console.log("Bank Account Balance (1-100) with doubled pay: $" + bonus_bank_account);
