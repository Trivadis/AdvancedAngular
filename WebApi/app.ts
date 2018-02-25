import bodyParser = require('body-parser');
import express = require('express');

interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}
interface Device {
  id: number;
  name: string;
  description: string;
  price: number;
}

let app = express();
const port = 8180;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let employees: Employee[] = [
  { id: 1, firstname: 'Max', lastname: 'Payne', email: 'max.payne@trivadis.com' },
  { id: 2, firstname: 'Lara', lastname: 'Croft', email: 'lara.croft@trivadis.com' },
  { id: 3, firstname: 'Thomas', lastname: 'Huber', email: 'thomas.huber@trivadis.com' },
  { id: 4, firstname: 'Duke', lastname: 'Nukem', email: 'duke.nukem@trivadis.com' },
  { id: 5, firstname: 'Thomas', lastname: 'Gassmann', email: 'thomas.gassmann@trivadis.com' },
  { id: 6, firstname: 'Thomas', lastname: 'Bandixen', email: 'thomas.bandixen@trivadis.com' }
];

//CORS middleware
let allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

let employeeRouter = express.Router();
employeeRouter.route('/employees')
.get((request: express.Request, response: express.Response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(employees));
})
.post((request: express.Request, response: express.Response) => {
  let e = <Employee>request.body;

  e.id = getNextEmployeeId();
  employees.push(e);

  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(e));
});

employeeRouter
  .route('/employees/:id')
  .get((request: express.Request, response: express.Response) => {
    let id = request.params.id;
    let filteredEmployees = employees.filter(p => p.id == id);

    if (filteredEmployees.length != 1) {
      response.sendStatus(404);
    } else {
      response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(filteredEmployees[0]));
    }
  })
  .put((request: express.Request, response: express.Response) => {
    let e = <Employee>request.body;
    let filteredEmployees = employees.filter(p => p.id == e.id);

    if (filteredEmployees.length != 1) {
      response.sendStatus(404);
    } else {
      let employeeToUpdate = filteredEmployees[0];
      employeeToUpdate.firstname = e.firstname;
      employeeToUpdate.lastname = e.lastname;

      response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(employeeToUpdate));
      // response.sendStatus(200);
    }
  })
  .delete((request: express.Request, response: express.Response) => {
    let id = request.params.id;

    const newList = employees.filter(x => x.id != id);

    if (employees.length > newList.length) {
      employees = newList;

      response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(true));
    } else {
      response.sendStatus(404);
    }
  });

function getNextEmployeeId(): number {
  let maxId = 1;
  employees.forEach(p => {
    maxId = Math.max(p.id, maxId);
  });
  return maxId + 1;
}


let devices: Device[] = [
  {
    id: 1,
    name: 'Surface Pro 4',
    description:
      'Ausgestattet mit einem Intel Core M-Prozessor, stellt diese Modellvariante den Einstieg in die Welt des Surface Pro 4 dar. Dieses Modell eignet sich insbesondere für den preisbewussten Studenten und Anwender, der das Gerät vorwiegend für die Textverarbeitung und das Surfen auf dem Internet nutzen.',
    price: 1583.1
  },
  {
    id: 2,
    name: 'Microsoft Arc Mouse',
    description:
      'Der Reisebegleiter für Ihr Surface-Gerät Schlank, leicht und hervorragend für Reisen geeignet – Surface Arc Maus passt sich Ihrer Hand an und kann für einfachen Transport flach zusammengeklappt werden.',
    price: 75.0
  }
];
let deviceRouter = express.Router();
deviceRouter.route('/devices').get((request: express.Request, response: express.Response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(devices));
});

app.use(allowCrossDomain);
app.use('/api', employeeRouter);
app.use('/api', deviceRouter);

app.listen(port, () => {
  console.log('Started listening on port ' + port);
});
