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
  add(titulo, descripcion, start, end){
    
    //Fecha Inicio
    let yStart = start.value.substr(0,4)
    let mStart = start.value.substr(5,2)
    let dStart = start.value.substr(8,2)

    let dateStart = `${dStart}/${mStart}/${yStart}`
    //Fecha Fin
    let yEnd = end.value.substr(0,4)
    let mEnd = end.value.substr(5,2)
    let dEnd = end.value.substr(8,2)

    let dateEnd = `${dEnd}/${mEnd}/${yEnd}`


    this.taskService.save(titulo.value,descripcion.value,dateStart,dateEnd)
    titulo.value.reset
    descripcion.value.reset
    start.value.reset
    end.value.reset
    this.router.navigate(['home'])      
  }
}
