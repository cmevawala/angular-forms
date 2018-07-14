import { Component, OnInit } from '@angular/core';

import { Employee } from './models/employee.model';
import { DataService } from './services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = ["English", "Hindi", "Gujarati"];
  employee: Employee = new Employee("", "", false, "w2", "default");

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    // console.log(this.employee);
    this._dataService.postEmployee(this.employee).subscribe(data => console.log('success: ', data), error => console.log('success: ', error));
  }
}
