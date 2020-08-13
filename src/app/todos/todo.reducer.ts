import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, clearCompleted } from './todo.actions';
import { Todo } from './models/todo';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Matar un orco'),
    new Todo('Robar el anillo')
];

const _todoReducer = createReducer(initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),

    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    }),

    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),

    on(toggleAll, (state, { completado }) => {
        return state.map(todo => {
            return {
                ...todo,
                completado: completado
            }
        });
    }),

    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),

    on(clearCompleted, (state) => state.filter(todo => !todo.completado))


);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}