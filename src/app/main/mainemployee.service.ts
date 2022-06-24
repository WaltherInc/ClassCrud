import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInterface } from '../interface/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class MainemployeeService {

  constructor(private http: HttpClient) { }

  viewEmployees(){
    return this.http.get<Array<any>>('https://localhost:7180/Siigo')
  }

  saveEmployee(employee: FormData){
    return this.http.post<Array<any>>('https://localhost:7180/Siigo',employee);
  }

  deleteEmployee(id:any){
    return this.http.delete('https://localhost:7180/Siigo')
  }
}
