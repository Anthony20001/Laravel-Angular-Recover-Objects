import { Component, OnInit } from '@angular/core';
import { PetitionService } from '../../services/petition.service';
import {BodyResponse, BodyPetition} from '../../Interfaces/petition';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
    solicitudes: any = [];
    
  constructor(private petitionService: PetitionService) { }

  ngOnInit(): void { 
    this.petitionService.getPetitions()
        .subscribe(value => {
            value.Response.forEach(item => {
                console.log(item);
            })

            this.solicitudes = value.Response;
        })
  }

  delete(id: number){
    if(confirm('¿Desea eliminar la solicitud?')){
        this.petitionService.deletePetition(id)
        .subscribe(data => {
            this.ngOnInit();
        })
    }
  }
}
