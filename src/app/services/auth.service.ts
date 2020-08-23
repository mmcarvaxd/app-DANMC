import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // usuario: Usuario = null

  constructor() {}

  getUser(): Usuario {
    let aux = localStorage.getItem("usuario")
    
    if(aux) {
      return JSON.parse(aux)
    } else {
      return null
    }
  }

  deleteUser(): void {
    localStorage.clear()
  }
}
