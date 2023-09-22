import { Component, OnInit } from '@angular/core';
import { ApiUsuariosService } from 'src/app/api-usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
    usuarios:any={};
    constructor(private service: ApiUsuariosService ){}

    ngOnInit():void{
      this.service.getAllUsuarios().subscribe(data=>{
       // console.log(data);
       this.usuarios=data;
        console.log("info: ",this.usuarios);
      })
      
      
    }
}
