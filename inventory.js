// Shoe Functions.
// Shoes object constructor.
class Shoes { 
    constructor(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
    };
    set newName(newName) {
        this.name = newName;
    }
};

// Console table a Shoe search by name.
function shoeSearchName(array, name) {
    console.table(array.filter((shoes) => shoes.name === name));
};
// Or by productcode denpending on preference.
function shoeSearchProductCode(array, productCode) {
    console.table(array.filter((shoes) => shoes.productCode === productCode));
};

// Console table lowest by valuePerItem shoe.
function shoesLowestValue(array) {    
    const lowest = Math.min(...array.map(shoes => shoes.valuePerItem));
    const lowestShoe = array.filter((shoes) => shoes.valuePerItem === lowest);
    console.table(lowestShoe);
};

// Console table highest by valuePerItem shoe.
function shoesHighestValue(array) {    
    const highest = Math.max(...array.map(shoes => shoes.valuePerItem));
    const highestShoe = array.filter((shoes) => shoes.valuePerItem === highest);
    console.table(highestShoe);
};

// Edit shoe properties by accessing object from index of the array.
function editName(array, index, newName) {
    if (index >= 0 && index < array.length) {
        array[index].name = newName;
        console.table(array);
    } else {
        console.log("Invalid index.");
    }
};


// Order array of objects in ascending valuePerItem. Assiging valuePerItem to a and b
// so for the compare sort function to work.
function orderByAscending(array) {
    let ascendingArray = array.sort((a, b) => a.valuePerItem - b.valuePerItem);
    console.table(ascendingArray);
};


// Inventory array for shoes to be pushed to.
let shoeInventory = [];

// Creating shoe objects.
let workShoes = new Shoes("Rogans", "PC01", 14, 75.99);
let runningShoes = new Shoes("Quickstep", "PC02", 3, 60.00);
let balletShoes = new Shoes("Piedes", "PC03", 20, 14.50);
let hikingShoes = new Shoes("Outwear", "PC04", 3, 145.00);
let highHeelShoes = new Shoes("Coltellos", "PC05", 8, 24.45);

// Pushing shoes to inventory and console logging.
shoeInventory.push(workShoes, runningShoes, balletShoes, hikingShoes, highHeelShoes);
console.table(shoeInventory);


// Examples of functions acting on shoe inventory.
// shoeSearchName(shoeInventory, "Rogans");
// shoeSearchProductCode(shoeInventory, "PC05");
// shoesLowestValue(shoeInventory);
// shoesHighestValue(shoeInventory);
// orderByAscending(shoeInventory);
// editName(shoeInventory, 0, "Dogans");
// shoeSearchName(shoeInventory, "Dogans");





