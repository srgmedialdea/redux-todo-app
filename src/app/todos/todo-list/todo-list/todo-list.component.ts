import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo';
import { AppState } from '../../app.state';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    })
    //this.store.select('todos').subscribe(todos => this.todos = todos);
  }

}
