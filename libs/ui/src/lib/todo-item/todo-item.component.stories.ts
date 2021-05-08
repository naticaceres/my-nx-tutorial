import { text } from '@storybook/addon-knobs';
import { TodoItemComponent } from './todo-item.component';

export default {
  title: 'TodoItemComponent',
  component: TodoItemComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    biggerTitle: text('biggerTitle', 'my bigger title'),
  }
})