import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable, EMPTY, tap, switchMap, filter, merge } from 'rxjs';
import { Todo, Todos } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageQueueService } from '../../services/message-queue.service';
import { Action } from '../../models/action';
import { ActionType } from '../../models/action-type';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule, MatCheckboxModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit,AfterViewInit {

  private todoService: TodoService = inject(TodoService)
  private messageQueueService: MessageQueueService = inject(MessageQueueService)


  // public todos$:Observable<Todos> = EMPTY
  public todos$!: Observable<Todos>

  displayedColumns = ['id', 'title', 'completed', 'chkCompleted', 'action']

  ngAfterViewInit(): void {
    this.messageQueueService.dispatch({type:ActionType.LOAD_TODOS})
  }
  
  ngOnInit(): void {

    const loadTodos$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.LOAD_TODOS)
    )
    const newTodo$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.NEW_TODO),
      switchMap((action:Action)=>this.todoService.save(action.payload as Todo))
    )

    const deleteTodo$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.DELETE_TODO),
      switchMap((action:Action)=>this.todoService.delete(action.payload as Todo))
    )
    
    this.todos$ = merge( loadTodos$, newTodo$,deleteTodo$).pipe(
      switchMap(()=>this.todoService.findAll())
    )
    
  }


  onDelete(todo: Todo) {
    // this.todoService.delete(todo).subscribe(() => {
    //   this.todos$ = this.todoService.findAll()
    // })

    // this.todos$ = this.todoService.delete(todo).pipe(
    //   tap(data => console.log(data)),
    //   switchMap((data) => this.todoService.findAll()),
    //   tap(data => console.log(data)),
    // )
  }

}
