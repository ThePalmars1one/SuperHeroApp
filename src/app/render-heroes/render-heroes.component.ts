import { Component} from '@angular/core';
import { HeroesService } from '../services/heroes.service';


@Component({
  selector: 'app-render-heroes',
  templateUrl: './render-heroes.component.html',
  styleUrls: ['./render-heroes.component.css']
})
export class RenderHeroesComponent{

  allHeroes: any= []


  constructor(private _heroesService: HeroesService) {}

  async loadHeroes() {
    try {
      const heroes = await this._heroesService.getHeroes();
      console.log(heroes);
      this.allHeroes.push(...heroes); // Agrega los héroes individualmente
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la llamada a la API.
    }
  }

  ngOnInit() {
    this.loadHeroes();
  }
  

}
