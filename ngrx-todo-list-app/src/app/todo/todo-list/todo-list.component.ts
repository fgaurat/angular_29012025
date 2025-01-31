import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, Todos } from '../../models/todo';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { deleteTodo, loadTodos, TodoActionPayload } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, FormsModule, MatButtonModule, MatIconModule],

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  displayedColumns = ['id', 'title', 'completed', 'chkCompleted', 'action']
  private store = inject(Store<{ todoList: Todos }>);
  todos$: Observable<Todos> = this.store.select('todoList');

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }

  onDelete(todo:Todo){
    const p:TodoActionPayload = {todo}
    this.store.dispatch(deleteTodo(p))

  }


}
