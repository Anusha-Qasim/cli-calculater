#! /usr/bin/env node
import inquirer from "inquirer";
const response = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "choose an operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (response.operator === "Addition") {
    console.log(response.firstnumber + response.secondnumber);
}
else if (response.operator === "Subtraction") {
    console.log(response.firstnumber - response.secondnumber);
}
else if (response.operator === "Multiplication") {
    console.log(response.firstnumber * response.secondnumber);
}
else {
    console.log(response.firstnumber / response.secondnumber);
}
