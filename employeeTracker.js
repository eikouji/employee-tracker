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
            viewEmployees();
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
            
            case: "View Managers";
            viewManagers();
            break; 
            
            // add //

            case: "Add Employee":
            addEmployee();
            break;

            case: "Add Role":
            addJob();
            break;

            case: "Add Department"
            addDepartment();
            break;

            case: "Add Manager"
            addManager();
            break;

            // update //

            case: "Update Employee"
            updateEmployee();
            break;

            case: "Update Department"
            updateDepartment();
            break;

            case: "Update Department Budget"
            updateDeptBudget();
            break;

            case: "Update Manager"
            updateManager();
            break;
        }
    })
}
