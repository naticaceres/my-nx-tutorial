import { object, text, withKnobs } from '@storybook/addon-knobs';
import { TodosComponent } from './todos.component';
import { Todo } from '@my-nx-tutorial/data';

export default {
  title: 'TodosComponent',  
  decorators: [withKnobs]
};

const myArray: Todo[] = [{title: 'myFirstTodo'}]

export const primaryWithKnobs = () => (
  {
  component: TodosComponent,  
  props: {
    todoTitle: text('todoTitle', 'my tytle'),
    
    todos: object('todos', myArray) 
  },
});
