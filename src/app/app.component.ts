import { Component, OnInit } from '@angular/core';

import { data, Item } from './data';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: Item[] = data; // data to be drawn
  id: number; // id of the folder to open when you click

  ngOnInit() {
    this.id = null;
  }

  show(child) {
    this.id = child.id;
  }

  hide() {
    this.id = null;
  }
}
