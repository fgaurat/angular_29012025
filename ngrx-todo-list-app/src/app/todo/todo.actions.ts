import { createAction } from "@ngrx/store";
import { ActionType } from "../models/action-type";


export const loadTodos = createAction(ActionType.LOAD_TODOS)
export const loadTodosSuccess = createAction(ActionType.LOAD_TODOS_SUCCESS)