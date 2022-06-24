import { Component, OnInit } from '@angular/core';
import { MainemployeeService } from '../main/mainemployee.service';
import { Router, Routes } from '@angular/router';

interface employeeInterface {
  id: number;
  firstName: string;
  lastName: string;
  identificationDocument: string;
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
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  info:Array<employeeInterface>=[];
  cargada=false;
  eliminarid:any;

  constructor(private mainemployee: MainemployeeService, private router: Router) { }

  ngOnInit(): void {
    this.mainemployee.viewEmployees().subscribe(data => {
      this.info=data;
      this.cargada=true;
      console.log(data);
    });
  }

  modifyEmployee (id : number) {
    this.router.navigateByUrl ('modify/'+id);
  }

  deleteEmployee (id : number) {
    this.router.navigateByUrl ('home'+id);
  }

  closeTable () {
    this.router.navigateByUrl ('home');
  }

  newEmployee () {
    this.router.navigateByUrl ('employee');
  }

}
