import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {EmployeeInterface} from 'src/app/interface/employee-interface'
import { MainemployeeService } from '../main/mainemployee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  photoEmployee: Blob = new Blob();
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
    archivo : ''
  };
  imgRenderizada : any;

  public payroll : string = "salary";

  constructor(private router: Router, private mainemployeeService: MainemployeeService) {}

  ngOnInit(): void {}

  saveForms () {
    //console.log(this.createEmployee);

    let formDataExample : FormData = new FormData();
    formDataExample.append('id',this.createEmployee.id.toString());
    formDataExample.append('firstName',this.createEmployee.firstName);
    formDataExample.append('lastName',this.createEmployee.lastName);
    formDataExample.append('identificationDocument',this.createEmployee.identificationDocument);
    formDataExample.append('expeditionPlace',this.createEmployee.expeditionPlace);
    formDataExample.append('residenceAdress',this.createEmployee.residenceAdress);
    formDataExample.append('city',this.createEmployee.city);
    formDataExample.append('departament',this.createEmployee.departament);
    formDataExample.append('country',this.createEmployee.country);
    formDataExample.append('email',this.createEmployee.email);
    formDataExample.append('education',this.createEmployee.education);
    formDataExample.append('academicTitle',this.createEmployee.academicTitle);
    formDataExample.append('photoFile',this.photoEmployee);
    this.mainemployeeService.saveEmployee(formDataExample).subscribe(
      (data)=>{
        console.log(data);
        debugger;
      },
      (error)=>{}
    );
  }

  closeTable () {
    this.router.navigateByUrl ('Report');
  }

  holaMundo(e: any){

    console.log(e);
    let hola : Blob = new Blob();
    this.photoEmployee = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.photoEmployee);
    reader.onload = () =>{
      this.imgRenderizada = reader.result;
    }
    console.log(this.photoEmployee);
  }
}
