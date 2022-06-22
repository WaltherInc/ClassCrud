import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {EmployeeInterface} from 'src/app/interface/employee-interface'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  createEmployee: EmployeeInterface = {
    id:0,
    firstName: '',
    lastName: '',
    identificationDocument: '',
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveForms () {
    console.log(this.createEmployee);
  }

  closeTable () {
    this.router.navigateByUrl ('Report');
  }
}
