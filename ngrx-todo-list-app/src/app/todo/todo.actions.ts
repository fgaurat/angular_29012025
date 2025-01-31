import { createAction, props } from "@ngrx/store";
import { ActionType } from "../models/action-type";
import { Todo, Todos } from "../models/todo";

export interface TodoActionPayload{
    todo:Todo
}
export const loadTodos = createAction(ActionType.LOAD_TODOS)
export const loadTodosSuccess = createAction(ActionType.LOAD_TODOS_SUCCESS,props<{todos:Todos}>())
export const deleteTodo = createAction(ActionType.DELETE_TODO,props<TodoActionPayload>())