import { Injectable, OnInit } from '@angular/core';
import { Observable , of } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = JSON.parse(window.localStorage['tasks'] || '[]')

  constructor() {}
  persistence(){
    window.localStorage['tasks'] = JSON.stringify(this.tasks)
    
  }

  findAll():Observable<any> {
    return this.tasks
  }

  findOne(name):Observable<any> {
    let task;
    for (let i = 0; i < this.tasks.length; i++) {
      if (name.id == this.tasks[i].title) {
        task = this.tasks[i];
      }

    }
    return task
  }

  save(title,description,start,end):Observable<any> {
    
    const task = {
      title: title,
      description: description,
      state: false,
      start: start,
      end: end
    }
    
    this.tasks.push(task);
    this.persistence()   
    return null
  }

  delete(title){
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].title === title) {
        console.log(this.tasks[i].id)
        this.tasks.splice(i,1)
        this.persistence()
        return
      }
      
    }
  }

  checkTask(title){
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].title === title) {
        
        if (this.tasks[i].state == false) {
          this.tasks[i].state = true
          this.persistence()
          return
        }
        else{
          this.tasks[i].state = false
          this.persistence()
          return
        }

        
      }
      
    }
    
  }
}
