import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3001/users";
  constructor(private httpClient: HttpClient) { }

  login(user: any) {
    return this.httpClient.post<{userToSend:any, message: string}>(`${this.userURL}/login`, user);
  }

  signup(user: any, img:File) {
    let formData = new FormData();
    formData.append('firstName',user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email',user.email);
    formData.append('pwd',user.pwd);
    formData.append('img',img);
    return this.httpClient.post<{message:string}>
    (`${this.userURL}/signup`, formData);
  }

  getUserById(id){
    return this.httpClient.get<{findedUser:any}>(`${this.userURL}/find/${id}`);
  }

}
