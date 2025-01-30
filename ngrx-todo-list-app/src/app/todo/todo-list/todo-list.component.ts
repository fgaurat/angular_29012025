import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from '../../models/todo';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, FormsModule, MatButtonModule, MatIconModule],

  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos$: Observable<Todos>;
  displayedColumns = ['id', 'title', 'completed', 'chkCompleted', 'action']

  constructor(private store: Store<{ todoList:Todos }>) {
    this.todos$ = store.select('todoList');
  }

}
