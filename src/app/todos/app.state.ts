import { ActionReducerMap } from '@ngrx/store'

import {Todo} from './models/todo'
import { todoReducer } from './todo.reducer'
import {validFilters} from './filter/filter.actions'
import {filterReducer} from './filter/filter.reducer'

export interface AppState {
    todos: Todo[],
    filter: validFilters
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}