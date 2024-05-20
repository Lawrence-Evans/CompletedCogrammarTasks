// Creating variables.
let allIncomes = [];
let allExpenses = [];
let disposableIncome = 0;
let savings = 0;

// Income object constructor.
class Income {
  constructor(name, amount, recurring) {
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
  }
}

// Expenses object constructor.
class Expense {
  constructor(name, amount, recurring) {
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
  }
}

// Creating income objects. Their total is 2481.
let salary = new Income("Salary", 2000, true);
let commissions = new Income("Commissions", 250, false);
let stocksAndShares = new Income("Investments", 155, true);
let ebaySales = new Income("Ebay Sales", 75, false);
let backOfTheSofa = new Income("Back of the Sofa", 1, true);

// Creating expense objects. Their total is 2075. Making disposable income = 406 initially.
let rent = new Expense("Rent", 1375, true);
let fuel = new Expense("Fuel", 100, true);
let food = new Expense("Food", 150, true);
let bills = new Expense("Bills", 350, true);
let goingOut = new Expense("Going Out", 100, false);

// Push variables to their array then converting it to JSON when stored session storage.
function mySession() {
  if (sessionStorage.getItem("previousSession") === null) {
    allIncomes.push(
      salary,
      commissions,
      stocksAndShares,
      ebaySales,
      backOfTheSofa
    );
    sessionStorage.setItem("seshAllIncomes", JSON.stringify(allIncomes));
    allExpenses.push(rent, fuel, food, bills, goingOut);
    sessionStorage.setItem("seshAllExpenses", JSON.stringify(allExpenses));
    // Setting previousSession to true so it only creates the initial arrays once.
    sessionStorage.setItem("seshSavings", JSON.stringify(savings));
    sessionStorage.setItem("previousSession", true);
  } else {
    //Get the array of objects from sessionStorage and assign it to previously declared arrays.
    allIncomes = JSON.parse(sessionStorage.getItem("seshAllIncomes"));
    allExpenses = JSON.parse(sessionStorage.getItem("seshAllExpenses"));
    savings = JSON.parse(sessionStorage.getItem("seshSavings"));
  }
}

// Calling mySession function
mySession();

// Disposable income can be calculated from storage whenever the page is loaded, total income array - total expenses array.
JSON.parse(sessionStorage.getItem("seshAllIncomes"));
for (let i in allIncomes) {
  disposableIncome += allIncomes[i].amount;
};
JSON.parse(sessionStorage.getItem("seshAllExpenses"));
for (let i in allExpenses) {
  disposableIncome -= allExpenses[i].amount;
};

// Display total disposable income, savings and income after savings on the page.
document.getElementById("displayDisposable").innerHTML = "Current disposable income : £" + disposableIncome;
document.getElementById("displaySavings").innerHTML = "Current savings : £" + savings;
document.getElementById("displayLeftover").innerHTML = "Leftover disposable income : £" + (disposableIncome - savings);

// All button functions are triggered my onclick in html.
// Show income function.
let showIncomes = () => {
  alert(sessionStorage.getItem("seshAllIncomes"));
};

// Show expenses function.
let showExpenses = () => {
  alert(sessionStorage.getItem("seshAllExpenses"));
};

// Functions
// To make new income. Retrieving array from session, pushing allIncomes array and setting to session again.
function addIncome() {
  allIncomes = JSON.parse(sessionStorage.getItem("seshAllIncomes"));
  let newIncome = new Income(
    document.getElementById("incomeName").value,
    // Converting string to integer
    parseInt(document.getElementById("incomeAmount").value),
    // Converting string to boolean. Accepts only true or false in lower or upper case.
    JSON.parse(document.getElementById("incomeRecurring").value.toLowerCase())
  );
  allIncomes.push(newIncome);
  sessionStorage.setItem("seshAllIncomes", JSON.stringify(allIncomes));
  // Page reload to update displayed values.
  location.reload();
};

// To make new expense. Retrieving array from session, pushing  to allExpenses array and setting to session again.
function addExpense() {
  allExpenses = JSON.parse(sessionStorage.getItem("seshAllExpenses"));
  let newExpense = new Expense(
    document.getElementById("expenseName").value,
    // Converting text to integer
    parseInt(document.getElementById("expenseAmount").value),
    // Converting string to boolean. Accepts only true or false in lower or upper case.
    JSON.parse(document.getElementById("expenseRecurring").value.toLowerCase())
  );
  allExpenses.push(newExpense);
  sessionStorage.setItem("seshAllExpenses", JSON.stringify(allExpenses));
  // Page reload to update displayed values.
  location.reload();
};

// To part income into savings, storing it in session and alerting the new disposable income. 
function putIntoSavings() {
    let savings = parseFloat(prompt("Type an amount to save"));
    sessionStorage.setItem("seshSavings", JSON.stringify(savings));
    document.getElementById("displaySavings").innerHTML = "Current savings :" + savings;
    alert("Leftover disposable income " + (disposableIncome - savings));
      // Page reload to update displayed values.
    location.reload();
};

// Showing incomes as page is loaded.
// This gives one alert
// alert(JSON.stringify(allIncomes));

// Calling showIncome gives two alerts, the second is undefined? Possibly due to using an arrow function.
// alert(showIncomes());
