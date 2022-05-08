// Classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatedHTML = require("./dist/generatedHTML")

// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest")
// empty arrays to hold the data
let managerArr = [];
let engineerArr = [];
let internArr = [];

let managerCounter = 0;
// array with all the questions and data
const teamMembers = {
    
    Manager: [{
            type: "input",
            message: "What is the manager's name? ",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the manager's id? ",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is the manager's email? ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number? ",
            name: "officeNumber"
        }
    ],

    Engineer: [{
            type: "input",
            message: "What is the engineer's name? ",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the engineer's id? ",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is the engineer's email? ",
            name: "engineerEmail"
        }, {
            type: "input",
            message: "What is the engineer's Github username? ",
            name: "Github"
        }
    ],

    Intern: [{
            type: "input",
            message: "What is the intern's name? ",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the intern's id? ",
            name: "internId"
        },
         {
            type: "input",
            message: "What is the intern's email? ",
            name: "internEmail"
        }, {
            type: "input",
            message: "What is the intern's school? ",
            name: "school"
        }
    ]
}

// this function will start the app

function start() {

    inquirer.prompt(addNew).then((answer) => {

        if (answer.addMember == "yes") {
            addRole();
        } else {
            return writeToFile(generatedHTML(managerArr, engineerArr, internArr));
        console.log(managerArr, engineerArr, internArr);
        //this should return (manager, engineer, intern);
        };
    })
}
//this is the first prompt that will start the app if yes will open addRole if not will generate the html
const addNew = {
    type: "List",
    message: "Do you want to add another employee? ",
    name: "addMember",
    choices: ["yes", "no"],
}
// this will allow only 1 manager but multiple engineers and managers
function addRole() {
    inquirer.prompt([{
        type: "list",
        message: "Choose the employee's role:",
        name: "employeeChoice",
        choices: ["Manager", "Engineer", "Intern"]
    }]).then((answer) => {
        if (answer.employeeChoice === "Manager" && managerCounter < 1) {
            managerCounter++
            
            inquirer.prompt(teamMembers.Manager).then((results) => {

                const manager = new Manager(results.managerName, results.managerId, results.managerEmail, results.officeNumber);
                managerArr.push(manager);
                start();
            })
        } else if (answer.employeeChoice === "Engineer") {

            inquirer.prompt(teamMembers.Engineer).then((results) => {

                const engineer = new Engineer(results.engineerName, results.engineerId, results.engineerEmail, results.Github);
                engineerArr.push(engineer);

                start();
            })
        } else if (answer.employeeChoice === "Intern") {

            inquirer.prompt(teamMembers.Intern).then((results) => {

                const intern = new Intern(results.internName, results.internId, results.internEmail, results.school);
                internArr.push(intern);
                start();
            })
        } else {
            start();
        }
    })
}
start();
// generate the html file in the dist folder
function writeToFile(data){
    fs.writeFile("./dist/index.html", data, (error) => error ? console.log(error) : console.log("a index.html has been generated successfully."));
};