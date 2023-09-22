import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  private API_USUARIOS="http://127.0.0.1:8000/api/user";

  constructor(private http:HttpClient) {  }
  
  public getAllUsuarios():Observable<any>{
    return this.http.get(this.API_USUARIOS);
  }
}
