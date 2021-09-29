import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/components/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias : any
  images : any
  carrousel : any
  constructor(private service : NoticiasService, ) {}

  async ngOnInit() {
    this.noticias = await this.service.noticias()
    console.log(this.noticias )
  }

}
