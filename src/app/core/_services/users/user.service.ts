import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addUser(body:any) {
    return this.httpClient.post<User>(`${environment.apiUrl}/users/addUser`, body)
  }

  getUser() {
    return this.httpClient.get(`${environment.apiUrl}/users`)
  }
}
