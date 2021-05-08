import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-nx-tutorial-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() biggerTitle: string;
}
