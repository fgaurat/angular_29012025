import { Component, inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatInputModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todoService:TodoService = inject(TodoService)
  todoForm: Todo = {
    title: "",
    completed: false
  }

  submitTodo() {
    console.log("todoForm",this.todoForm);
    this.todoService.save(this.todoForm).subscribe()
  }
}
