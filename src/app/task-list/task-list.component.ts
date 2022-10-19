import { Component, OnInit } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList : Task[] = [ 
    {
      id: 1,
      name: 'finish Angular task',
      isDone: false
    },
    {
      id: 2,
      name: 'build a button',
      isDone: false
    },
    {
      id: 3,
      name: 'testing auto update',
      isDone: false
    }
  ]

  newTask : string = ''

  removeLastItem = () => {
    console.log('remove button works')
    this.taskList.pop()
  }


  constructor() {}


  addItem = () => {
    console.log('add button works')
    this.taskList.push({id: this.taskList.length + 1, name: this.newTask, isDone: false})

    this.newTask = ''

  }

  //selectedTask ?: Task // <- no clue about what I'm doing here - optional bc no value at the beginning?
  

  strikeThroughItem = (task : Task) => { // <- no clue about the type here lol - any would be ok tho
    
    task.isDone = !task.isDone 
  
  }


  ngOnInit(): void {}

}

