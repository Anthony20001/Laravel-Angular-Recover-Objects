import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BodyResponse } from '../interfaces/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  constructor(private http: HttpClient) { }

  readObjects(){
    return this.http.get<BodyResponse>("https://apirecoverobjects2.herokuapp.com/api/v1/objetos");
  }
}
