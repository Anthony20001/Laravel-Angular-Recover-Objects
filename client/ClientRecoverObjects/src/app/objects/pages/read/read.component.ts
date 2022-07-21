import { Component, OnInit } from '@angular/core';
import {ObjectsService} from '../../services/objects.service';
import {BodyResponse} from '../../interfaces/object'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

    public objetos: any = [];
  constructor(private service: ObjectsService) { }

  ngOnInit(): void {
    this.service.readObjects()
    .subscribe(value => {
        this.objetos = value.objects;
    })
  }

}
