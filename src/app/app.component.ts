import { Component } from '@angular/core';

import { Item, data } from './shared/data';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Item[] = data; // data to be drawn
}
