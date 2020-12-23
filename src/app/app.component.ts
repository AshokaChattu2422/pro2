import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
template:`
<p>hi{{data}}</p>
<li *ngFor="let h of itemsarray">
<b>{{h}}</b>
</li>`,

  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro';
  
}

