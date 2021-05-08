import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TodosComponent,
    TodoItemComponent
  ],
  exports: [
    TodosComponent,
    TodoItemComponent
  ],
})
export class UiModule {}
