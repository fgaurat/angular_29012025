import { createAction, props } from "@ngrx/store";
import { ActionType } from "../models/action-type";
import { Todos } from "../models/todo";


export const loadTodos = createAction(ActionType.LOAD_TODOS)
export const loadTodosSuccess = createAction(ActionType.LOAD_TODOS_SUCCESS,props<{todos:Todos}>())