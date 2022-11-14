import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  login(postData: any): Observable<any> {
    return this.httpService.post('authentication/authenticate', postData);
  }

  signup(postData: any): Observable<any> {
    return this.httpService.post('authentication/signup', postData);
  }

  common(serviceName , postData: any): Observable<any> {
    return this.httpService.post(serviceName, postData);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
