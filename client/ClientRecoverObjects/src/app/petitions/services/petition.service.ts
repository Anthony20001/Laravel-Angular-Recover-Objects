import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BodyPetition, BodyResponse} from '../Interfaces/petition';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http: HttpClient) {
    console.log("solicitudes");
  }

  createPetitions(petition: BodyPetition){
    const url = "https://apirecoverobjects2.herokuapp.com/api/v1/solicitudes";
    return this.http.post<BodyResponse>(url, petition);
  }

  getPetitions(){
    const url = "https://apirecoverobjects2.herokuapp.com/api/v1/solicitudes";
    return this.http.get<BodyResponse>(url);
  }

  deletePetition($id: number){
    const url = "https://apirecoverobjects2.herokuapp.com/api/v1/solicitudes/"+$id;
    return this.http.delete<BodyResponse>(url);
  }

  update($id: number, petition: BodyPetition){
    const url = "https://apirecoverobjects2.herokuapp.com/api/v1/solicitudes/"+$id;
    return this.http.put<BodyResponse>(url, petition);
  }
}