export interface Employee {
    id: number;
    firstname: string;
    lastname: string;
    email?: string;
}

export const EmployeeData: Employee[] = [
    { id: 1, firstname: 'Max', lastname: 'Payne', email: 'max.payne@trivadis.com' },
    { id: 2, firstname: 'Lara', lastname: 'Croft', email: 'lara.croft@trivadis.com' },
    { id: 3, firstname: 'Thomas', lastname: 'Huber', email: 'thomas.huber@trivadis.com' },
    { id: 5, firstname: 'Thomas', lastname: 'Gassmann', email: 'thomas.gassmann@trivadis.com' },
    { id: 6, firstname: 'Francesco', lastname: 'Leardini', email: 'francesco.leardini@trivadis.com' },
];