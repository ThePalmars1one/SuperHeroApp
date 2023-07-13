import { Component} from '@angular/core';
import { HeroesService } from '../services/heroes.service';


@Component({
  selector: 'app-render-heroes',
  templateUrl: './render-heroes.component.html',
  styleUrls: ['./render-heroes.component.css']
})
export class RenderHeroesComponent{

  allHeroes: any= [];
  actualHeroes: any[] = [];
  categories: string[] = [];
  genders: any[] = [];
  races: any[]=[];
  showPowerstatButtons = false;

  constructor(private _heroesService: HeroesService) {}

  async loadHeroes() {
    try {
      const heroes = await this._heroesService.getHeroes();
      console.log(heroes);
      this.allHeroes.push(...heroes); // Agrega los héroes individualmente
      this.actualHeroes = this.allHeroes;
      this.getCategoriesFromHeroes();
      this.getGendersFromHeroes();
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la llamada a la API.
    }
  }

  ngOnInit() {
    this.loadHeroes();
  }

  getHeroesByPowerstats(category: string) {
    
    const filteredHeroes = this.allHeroes.filter((hero: any) => {
      return hero.powerstats.hasOwnProperty(category);
    });
    
    filteredHeroes.sort((a: any, b: any) => {
      const powerstatA = parseInt(a.powerstats[category]);
      const powerstatB = parseInt(b.powerstats[category]);
      
      return powerstatB - powerstatA;
    });
    
    this.actualHeroes = filteredHeroes;
  }

  getCategoriesFromHeroes() {

    const powerstatsKeys = Object.keys(this.allHeroes[0].powerstats);
    this.categories = powerstatsKeys;
    console.log(powerstatsKeys);
}

  getHeroesByGenders(gender: string){

  const filteredGenders = this.allHeroes.filter((hero: any) => {
    return hero.appearance.gender.toLowerCase() === gender.toLowerCase();
  });

  this.actualHeroes = filteredGenders;

}

  getGendersFromHeroes() {
  const genders = this.allHeroes.map((hero: any) => {
    return hero.appearance.gender.toLowerCase();
  });

  // Utilizar Set para obtener los géneros únicos
  const singleGenders = Array.from(new Set(genders));

  this.genders = singleGenders;
  console.log(this.genders);
}

getRacesFromHeroes() {
  
}




}
