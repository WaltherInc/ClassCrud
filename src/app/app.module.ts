import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ModifyComponent } from './modify/modify.component';
import { FooterComponent } from './footer/footer.component';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainemployeeService } from './main/mainemployee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    NavHeaderComponent,
    EmployeeComponent,
    ModifyComponent,
    FooterComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MainemployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
