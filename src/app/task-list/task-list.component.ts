import { Component, OnInit } from '@angular/core';

import { List } from '../list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList : List[] = [ 
    {
      id: 1,
      name: 'finish Angular task'
    },
    {
      id: 2,
      name: 'build a button'
    },
    {
      id: 3,
      name: 'testing auto update'
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
    this.taskList.push({id: this.taskList.length + 1, name: this.newTask})

    this.newTask = ''

  }

  selectedTask ?: List // <- no clue about what I'm doing here

  strikeThroughItem = (task : List) => { // <- no clue about the type here lol
    
    this.selectedTask = task
  
  }


  ngOnInit(): void {}

}

