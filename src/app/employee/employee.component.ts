import { Component, OnInit } from '@angular/core';
interface employeeInterface {
  firstName: string;
  lastName: string;
  identificationDocument: number;
  expeditionPlace: string;
  residenceAdress: string;
  city: string;
  departament: string;
  country: string;
  email: string;
  education: string;
  academicTitle: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  createEmployee: employeeInterface = {
    firstName: '',
    lastName: '',
    identificationDocument: 0,
    expeditionPlace: '',
    residenceAdress: '',
    city: '',
    departament: '',
    country: '',
    email: '',
    education: '',
    academicTitle: '',
  };

  public payroll : string = "salary";

  constructor() {}

  ngOnInit(): void {}

  saveForms () {
    console.log(this.createEmployee);
  }
}
