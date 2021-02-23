"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var port = 8180;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var employees = [
    { id: 1, firstname: 'Max', lastname: 'Payne', email: 'max.payne@trivadis.com' },
    { id: 2, firstname: 'Lara', lastname: 'Croft', email: 'lara.croft@trivadis.com' },
    { id: 3, firstname: 'Thomas', lastname: 'Huber', email: 'thomas.huber@trivadis.com' },
    { id: 4, firstname: 'Duke', lastname: 'Nukem', email: 'duke.nukem@trivadis.com' },
    { id: 5, firstname: 'Thomas', lastname: 'Gassmann', email: 'thomas.gassmann@trivadis.com' },
    { id: 6, firstname: 'Thomas', lastname: 'Bandixen', email: 'thomas.bandixen@trivadis.com' }
];
//CORS middleware
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
var employeeRouter = express.Router();
employeeRouter.route('/employees')
    .get(function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(employees));
})
    .post(function (request, response) {
    var e = request.body;
    e.id = getNextEmployeeId();
    employees.push(e);
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(e));
});
employeeRouter
    .route('/employees/:id')
    .get(function (request, response) {
    var id = +request.params.id;
    var filteredEmployees = employees.filter(function (p) { return p.id == id; });
    if (filteredEmployees.length != 1) {
        response.sendStatus(404);
    }
    else {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(filteredEmployees[0]));
    }
})
    .put(function (request, response) {
    var e = request.body;
    var filteredEmployees = employees.filter(function (p) { return p.id == e.id; });
    if (filteredEmployees.length != 1) {
        response.sendStatus(404);
    }
    else {
        var employeeToUpdate = filteredEmployees[0];
        employeeToUpdate.firstname = e.firstname;
        employeeToUpdate.lastname = e.lastname;
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(employeeToUpdate));
        // response.sendStatus(200);
    }
})
    .delete(function (request, response) {
    var id = request.params.id;
    var newList = employees.filter(function (x) { return x.id != id; });
    if (employees.length > newList.length) {
        employees = newList;
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify(true));
    }
    else {
        response.sendStatus(404);
    }
});
function getNextEmployeeId() {
    var maxId = 1;
    employees.forEach(function (p) {
        maxId = Math.max(p.id, maxId);
    });
    return maxId + 1;
}
var devices = [
    {
        id: 1,
        name: 'Surface Pro 4',
        description: 'Ausgestattet mit einem Intel Core M-Prozessor, stellt diese Modellvariante den Einstieg in die Welt des Surface Pro 4 dar. Dieses Modell eignet sich insbesondere für den preisbewussten Studenten und Anwender, der das Gerät vorwiegend für die Textverarbeitung und das Surfen auf dem Internet nutzen.',
        price: 1583.1
    },
    {
        id: 2,
        name: 'Microsoft Arc Mouse',
        description: 'Der Reisebegleiter für Ihr Surface-Gerät Schlank, leicht und hervorragend für Reisen geeignet – Surface Arc Maus passt sich Ihrer Hand an und kann für einfachen Transport flach zusammengeklappt werden.',
        price: 75.0
    }
];
var deviceRouter = express.Router();
deviceRouter.route('/devices').get(function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(devices));
});
app.use(allowCrossDomain);
app.use('/api', employeeRouter);
app.use('/api', deviceRouter);
app.listen(port, function () {
    console.log('Started listening on port ' + port);
    console.log('You can navigate to http://localhost:8180/api/persons');
});
