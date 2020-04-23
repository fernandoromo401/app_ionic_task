import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(
    private taskService: TasksService,
    private router:Router
  ) { }
  
  ngOnInit() {
  }
  add(titulo, descripcion){
    
    this.taskService.save(titulo.value,descripcion.value)
    titulo.value.reset
    descripcion.value.reset
    this.router.navigate(['home'])      
  }
}
