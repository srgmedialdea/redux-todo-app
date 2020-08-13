import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { validFilters, setFilter } from '../../filter/filter.actions';
import { clearCompleted } from '../../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilters = 'All'; 
  filters:validFilters[] = ['All', 'Completed', 'Pending'];
  pendingItems: number = 0; 

  constructor(private store: Store<AppState>) {
    /* this.store.select('filter').subscribe(filter => 
    this.currentFilter = filter); */
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingItems = (state.todos.filter(todo => !todo.completado)).length;  
    })
   }

  ngOnInit(): void {
  }

  setFilter(f: validFilters) {
    this.store.dispatch(setFilter({filter: f}));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }

}
