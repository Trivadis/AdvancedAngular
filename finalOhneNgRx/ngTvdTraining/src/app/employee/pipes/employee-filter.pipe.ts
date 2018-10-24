import { Employee } from './../model/employee.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(value: Employee[], filterBy: string): Employee[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return (filterBy && value)
      ? value.filter(
          (e: Employee) =>
            (e.firstname.toLocaleLowerCase() + e.lastname.toLocaleLowerCase()).indexOf(filterBy) !==
            -1
        )
      : value;
  }
}
