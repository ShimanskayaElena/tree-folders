import { Component, Input } from '@angular/core';

import { Item } from './data';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  id: number; // id of the folder to open when you click

  @Input() children: Item[];

  show(child) {
    this.id = child.id;
  }

  hide() {
    this.id = null;
  }
}
