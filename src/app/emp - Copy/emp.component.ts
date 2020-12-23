import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
employee:any[]=[
  // if we commenting this we can't get any records ortherwise employee details are available
  {
    code: 'emp101', name: 'Ashok', gender: 'Male',
    annualSalary: 5500, dateOfBirth: '11/11/1997'
},
{
    code: 'emp102', name: 'Charu', gender: 'female',
    annualSalary: 5700.95, dateOfBirth: '21/08/1998'
},
{
    code: 'emp103', name: 'Ashu', gender: 'Female',
    annualSalary: 5900, dateOfBirth: '11/10/1998'
},
{
    code: 'emp104', name: 'pooja', gender: 'Female',
    annualSalary: 6500.826, dateOfBirth: '4/03/1999'
},
]
  constructor() { }

  ngOnInit() {
  }

}
