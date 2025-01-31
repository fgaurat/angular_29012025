import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { deleteTodo, loadTodos, loadTodosSuccess } from './todo.actions';
import { map, switchMap, tap } from 'rxjs';
import { Todos } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodos),
      tap((data) => console.log("data",data)),
      switchMap(() => this.todoService.findAll()),
      map((todos: Todos) => loadTodosSuccess({ todos }))
    )
  })


  deleteTodo$=createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((action) => this.todoService.delete(action.todo)),
      map(()=>loadTodos())
    )
  })
}
