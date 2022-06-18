import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { PayrollComponent } from './payroll/payroll.component';


const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'employee', component:EmployeeComponent},
    {path: 'payroll', component:PayrollComponent},
    {path: 'Report', component:ReportComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
