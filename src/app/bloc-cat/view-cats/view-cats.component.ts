import { Component, OnInit } from '@angular/core';
import { ApiCatsService } from 'src/app/api/api-cats.service';
import { Cat } from 'src/app/models/cat.model';


@Component({
  selector: 'app-view-cats',
  templateUrl: './view-cats.component.html',
  styleUrls: ['./view-cats.component.scss'],
})
export class ViewCatsComponent  implements OnInit {


  cats!: Cat[];

  constructor(private apiCatService: ApiCatsService) { }

  
  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.apiCatService.getCats().subscribe(data=> {      
      console.log(data);
      this.cats = data;
    });
  }

}
