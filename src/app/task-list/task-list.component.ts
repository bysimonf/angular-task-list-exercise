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



removeLastItem = () => {
  console.log('remove button works')
  this.taskList.pop()
}


constructor() {}


addItem = () => {
  console.log('add button works')
  this.taskList.push({id: 4, name: 'hardcoded dummy task'})
}


ngOnInit(): void {}

}

