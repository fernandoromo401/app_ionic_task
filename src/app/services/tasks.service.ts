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
    console.log(this.tasks)
    return this.tasks
  }

  save(title,description):Observable<any> {
    
    const task = {
      title: title,
      description: description,
      state: false
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
