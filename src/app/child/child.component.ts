import { Component, Input } from '@angular/core';

import { Item } from '../shared/data';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  id: number; // id of the folder to open when you click

  @Input() children: Item[];

  show(child, event) {
    event.stopPropagation();
    this.id = child.id;
  }

  hide(event) {
    event.stopPropagation();
    this.id = null;
  }
}
