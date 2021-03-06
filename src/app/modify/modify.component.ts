import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { EmployeeInterface } from '../interface/employee-interface';


@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  modifyEmployee: EmployeeInterface = {
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
    archivo: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modifyForms () {
    console.log(this.modifyEmployee);
  }

  closeTable () {
    this.router.navigateByUrl ('Report');
  }

}
