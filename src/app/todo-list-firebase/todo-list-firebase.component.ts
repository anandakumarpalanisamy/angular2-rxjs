import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { FirebaseObjectObservable } from 'angularfire2';
import { Todo } from './../todos-firebase-page';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list-firebase',
  templateUrl: 'todo-list-firebase.component.html',
  styleUrls: ['todo-list-firebase.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class TodoListFirebaseComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() onAddTodo: EventEmitter<string> = new EventEmitter<string>();

  private todoControl: FormControl;

  constructor() {}

  ngOnInit() {
    this.todoControl = new FormControl('', Validators.required);
  }

  private addTodo(todo: string){
    this.onAddTodo.next(todo);
    this.todoControl.updateValue(null);
  }

  private deleteTodo(key: string){
    this.onDeleteTodo.next(key);
  }
}
