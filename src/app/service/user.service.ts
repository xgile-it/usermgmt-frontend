import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+"/users");
  }
 
  public save(user: User) {
    return this.http.post<User>(this.baseUrl+"/users", user);
  }
}
