import { Component, Input } from '@angular/core';
import { Todo } from '@my-nx-tutorial/data';

@Component({
  selector: 'my-nx-tutorial-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todoTitle: string;
  @Input() todos: Todo[];
}
