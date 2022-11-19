import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerOff: boolean;
  headerOffRating: boolean;

  constructor(private location:Location, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('userID') == null) {
      this.router.navigate(['/login']);
    }
  }
}
