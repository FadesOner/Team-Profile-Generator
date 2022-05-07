const fs = require('fs');

function generateManagers(manager){
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Employee Id : ${manager.id}</li>
            <li class="list-group-item">Email : <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
`
}

function generateEngineers(engineer) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${engineer.id}</li>
            <li class="list-group-item">Email : <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github :<a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.name}'s GitHub Profile</a></li>
        </ul>
    </div>
</div>
  ` 
}

function generateInterns (intern) {

    return `
<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Employee Id : ${intern.id}</li>
            <li class="list-group-item">Email : <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School : ${intern.school}</li>
        </ul>
    </div>
</div>
`
}

function generatedHTML (managers, engineers, interns) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 bg-info text-white">
                <h1 class="text-center">My Team Profile</h1>
            </div>
        </div>
    </div>
    
<div class="container">
            <div class="row">
                <div class="col">
                <hr>
                ${managers.map(generateManagers).join("\n")}
                </div>
                <div class="col">
                <hr>
                ${engineers.map(generateEngineers).join("\n")}
                </div>
                <div class="col">
                <hr>
                ${interns.map(generateInterns).join("\n")}   
                </div>
            </div>
        </div>
   
    </body>
    </html>
    `
    
};


module.exports = generatedHTML;
