import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { TodoStore } from './../services';
import { TodoListComponent } from './../todo-list';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  directives: [TodoListComponent]
})
export class TodosComponent implements OnInit {
  private todos$: Observable<string[]>;

  constructor(private _todoStore: TodoStore) {}

  ngOnInit() {
    this.todos$ = this._todoStore.todos$;
  }

  addTodo(todo: string){
    this._todoStore.add(todo);
  }

  deleteTodo(todo: string){
    this._todoStore.remove(todo);
  }
}
