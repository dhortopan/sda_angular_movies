import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //metoda de transfer date din frontend in backend
  public login(email:string, password:string) {
    let body={
      'email': email,
      'password': password,
    }
    return this.httpClient.post(`${environment.backendAddress}/auth/login` ,body);

  }

 //format Json - metoda transfer date din frontend in backend
  public register(email:string, name:string, imageProfile:string, password:string){
    let body={
      'email': email,
      'name': name,
      'password': password,
      'imageUrl': imageProfile
    }
    return this.httpClient.post(`${environment.backendAddress}/auth/register` ,body);
  }
}
