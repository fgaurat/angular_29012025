import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, Todos } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http:HttpClient = inject(HttpClient)

  findAll():Observable<Todos>{
    return this.http.get<Todos>(environment.url_todos)
  }  


  delete(todo:Todo):Observable<void>{
    const url = `${environment.url_todos}/${todo.id}`
    return this.http.delete<void>(url)
  }

}
