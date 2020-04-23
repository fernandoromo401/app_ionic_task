import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  public task;
  constructor(
    private service: TasksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTask()
    console.log(this.task)
  }

  public getTask(){
    let url = this.route.snapshot.params
    this.task = this.service.findOne(url)
  }

}
