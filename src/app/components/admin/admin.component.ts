import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {

  constructor(private router: Router) { }

  createUser() {
    this.router.navigate(['createuser'])
  }

  manageSocioOrgao() {
    this.router.navigate(['socioorgao'])
  }
}
