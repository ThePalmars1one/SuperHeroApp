import { Component } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent {

  hero!: any;

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.hero= this._heroesService.getHeroeById(params['id'])
    })
  }



}
