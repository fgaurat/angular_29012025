import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../models/todo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatInputModule],
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css'
})
export class TodoReactiveFormComponent {
  private todoService: TodoService = inject(TodoService);
  private fb: FormBuilder = inject(FormBuilder);  

  todoForm = this.fb.group({
    title:['',Validators.required],
    completed:[false]
  })

  save(){
    console.log(this.todoForm.value) 
    console.log(this.todoForm.getRawValue()) 
    this.todoService.save(this.todoForm.value as Todo).subscribe()
  }
}
