import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model';
import { map, take } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Array<ToDo>;
  constructor(private http: HttpClient) {}

  getToDo(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos", {observe: 'response'}).pipe(
      // take(1),
      map((d:HttpResponse<ToDo[]>)=> d)
    ).subscribe(d=> console.log(d))
  }
}
