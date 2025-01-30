import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable, EMPTY, tap, switchMap } from 'rxjs';
import { Todo, Todos } from '../../models/todo';
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
export class TodoListComponent implements OnInit {
  private todoService: TodoService = inject(TodoService)


  // public todos$:Observable<Todos> = EMPTY
  public todos$!: Observable<Todos>

  displayedColumns = ['id', 'title', 'completed', 'chkCompleted', 'action']


  ngOnInit(): void {
    this.todos$ = this.todoService.findAll()
  }


  onDelete(todo: Todo) {
    this.todoService.delete(todo).subscribe(() => {
      this.todos$ = this.todoService.findAll()
    })

    this.todos$ = this.todoService.delete(todo).pipe(
      tap(data => console.log(data)),
      switchMap((data) => this.todoService.findAll()),
      tap(data => console.log(data)),
    )
  }

}
