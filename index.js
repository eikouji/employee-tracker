// includes MySQL info, but keeps it hidden in the gitignore //
const mySqlP = require('dotenv').config();

const inquirer = require("inquirer");
const table = require("console.table");

const prompt = require("./config/prompts");
require("console.table");

// initialize app //

// app start //
console.log('employee tracker created!');

// employee tracker prompt //
initialPrompt();

function initialPrompt() {
    inquirer.prompt(initialPrompt).then(function ({ job }) {
        switch (job) {
            // view //
            case: "View Employees":
            viewEmployee();
            break;

            case: "View Employees by Department":
            viewEmployeeDept();
            break;

            case: "View Departments":
            viewDept();
            break;

            case: "View Department Budget":
            viewDeptBudget();
            break;
            
            // add //

            case: "Add Employee":
            addEmployee();
            break;

            case: "Add Job":
            addJob();
            break;

            case: "Add Department"
            addDepartment();
            break;

            // update //

            case: "Update Employee"
            updateEmploye();
            break;
        }
    })
}
