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
