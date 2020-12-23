import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
 
  
  
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  hobbies:any[] = [    'dancing',    'singing',    'browsing'  ];
  constructor() { }

  ngOnInit() {
  }

}
