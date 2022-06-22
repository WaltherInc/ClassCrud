import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainemployeeService {

  constructor(private http: HttpClient) { }

  viewEmployees(){
    return this.http.get<Array<any>>('https://localhost:7180/Siigo')
  }

}
