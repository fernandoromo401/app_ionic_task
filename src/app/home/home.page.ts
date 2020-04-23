import { Component, OnInit, OnChanges } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public tasks

  constructor(
    private taskService: TasksService,
    private alert: AlertController
  ) {}

  ngOnInit(){
    this.getAll()
  }

  getAll(){
    this.tasks = this.taskService.findAll()
  }

  delete(title){
    this.taskService.delete(title)
  }

  check(title){
    this.taskService.checkTask(title)
  }
  

  

}
