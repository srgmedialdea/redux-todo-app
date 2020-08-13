import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo';
import { validFilters } from '../../filter/filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], appliedFilter: validFilters): Todo[] {

    switch (appliedFilter) {
      case 'Completed':
        return todos.filter(todo => todo.completado);
      case 'Pending':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }

  }

}
