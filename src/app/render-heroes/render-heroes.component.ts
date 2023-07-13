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
  heights:any[]=[];



  showPowerstatButtons = false;

  constructor(private _heroesService: HeroesService) {}

  async loadHeroes() {
    try {
      const heroes = await this._heroesService.getHeroes();
      console.log(heroes);
      this.allHeroes.push(...heroes); // IT ADDS EVERY HERO
      this.actualHeroes = this.allHeroes;
      this.getCategoriesFromHeroes();
      this.getGendersFromHeroes();
      this.getRacesFromHeroes();
      this.getHeightsFromHeroes();
    } catch (error) {
      // ITS PLANNED TO ADD A ERROR MESSAGE TO SHOW IT TO THE USER
    }
  }

  ngOnInit() {
    this.loadHeroes();
    this.sortHeights();
  }

  //POWERSTATS

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

  //GENDERS

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

  // IT OBTAINS EVERY SINGLE GENDER
  const singleGenders = Array.from(new Set(genders));

  this.genders = singleGenders;
  console.log(this.genders);
}

  //RACES

  getRacesFromHeroes() {
  const races = this.allHeroes.map((hero: any) => {
    return hero.appearance.race.toLowerCase();
  });

  const singleRaces = Array.from(new Set(races));

  this.races = singleRaces;
  console.log(this.races);

}

  getHeroesByRaces(race: string){

    const filteredRaces = this.allHeroes.filter((hero: any) => {
      return hero.appearance.race.toLowerCase() === race.toLowerCase();
    });
  
    this.actualHeroes = filteredRaces;
  
  }

  //HEIGHT

  getHeightsFromHeroes(){

    const heights = this.allHeroes.map((hero: any) => {
      return hero.appearance.height[1];
    });
  
    const singleHeights = Array.from(new Set(heights));
  
    this.heights = singleHeights;
    console.log(this.heights);

  }

  getHeroesByHeights(height: string){

    const filteredHeights = this.allHeroes.filter((hero: any) => {
      return hero.appearance.height.includes(height);
    });
  
    this.actualHeroes = filteredHeights;
  
  }

  sortHeights() {
    this.heights.sort((a, b) => {
      const heightA = parseInt(a, 10);
      const heightB = parseInt(b, 10);
      return heightA - heightB;
    });
  }




}
