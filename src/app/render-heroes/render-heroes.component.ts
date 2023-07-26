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
  search = "";
  page: number = 1;

  categories: string[] = [];
  genders: any[] = [];
  races: any[]=[];
  heights:any[]=[];
  weights:any[]=[];
  eyeColors:any[]=[];
  hairColors:any[]=[];

  noHeroesFound: boolean = false;

  constructor(private _heroesService: HeroesService) { }

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
      this.getWeightsFromHeroes();
      this.getEyecolorsFromHeroes();
      this.getHaircolorsFromHeroes();
      this.sortHeights();
      this.sortWeights();
    } catch (error) {
      // ITS PLANNED TO ADD A ERROR MESSAGE TO SHOW IT TO THE USER
    }
  }

  ngOnInit() {
    this.loadHeroes();
  }

  filterHeroes() {

    this.noHeroesFound = false;
    
    if (this.search.trim() === "") {
      this.actualHeroes = this.allHeroes;
    } else {
      this.actualHeroes = this.allHeroes.filter((hero: any) =>
        hero.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }

    if (this.actualHeroes.length === 0) {
      this.noHeroesFound = true;
    }

    this.page = 1;
  }

  //POWERSTATS

  getHeroesByPowerstats(category: string) {
    
    const filteredHeroes = this.allHeroes.filter((hero: any) => {
      return hero.powerstats.hasOwnProperty(category) && hero.powerstats[category] !== "null";
    });
    
    filteredHeroes.sort((a: any, b: any) => {
      const powerstatA = parseInt(a.powerstats[category]);
      const powerstatB = parseInt(b.powerstats[category]);
      
      return powerstatB - powerstatA;
    });
    
    this.actualHeroes = filteredHeroes;
    this.page = 1;
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
  this.page = 1;

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
    this.page = 1;
  
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
    this.page = 1;
  
  }

  sortHeights() {
    this.heights.sort((a, b) => {
      const heightA = parseInt(a, 10);
      const heightB = parseInt(b, 10);
      return heightA - heightB;
    });
  }

  //WEIGHTS

  getWeightsFromHeroes(){

    const weights = this.allHeroes.map((hero: any) => {
      return hero.appearance.weight[1];
    });
  
    const singleWeights = Array.from(new Set(weights));
  
    this.weights = singleWeights;
    console.log(this.weights);

  }

  getHeroesByWeights(weight: string){

    const filteredWeights = this.allHeroes.filter((hero: any) => {
      return hero.appearance.weight.includes(weight);
    });
  
    this.actualHeroes = filteredWeights;
    this.page = 1;
  
  }

  sortWeights() {
    this.weights.sort((a, b) => {
      const weightA = parseInt(a, 10);
      const weightB = parseInt(b, 10);
      return weightA - weightB;
    });
  }

  //EYE COLOR

  getEyecolorsFromHeroes(){

    const eyeColors = this.allHeroes.map((hero: any) => {
      return hero.appearance['eye-color'].toLowerCase();
    });
  
    const singleColors = Array.from(new Set(eyeColors));
  
    this.eyeColors = singleColors;
    console.log(this.eyeColors);

  }

  getHeroesByEyecolors(eyeColor: string){

    const filteredColors = this.allHeroes.filter((hero: any) => {
      return hero.appearance['eye-color'].toLowerCase() === eyeColor.toLowerCase();
    });
  
    this.actualHeroes = filteredColors;
    this.page = 1;
  
  }

  //HAIR COLOR

  getHaircolorsFromHeroes(){

    const hairColors = this.allHeroes.map((hero: any) => {
      return hero.appearance['hair-color'].toLowerCase();
    });
  
    const singleHaircolors = Array.from(new Set(hairColors));
  
    this.hairColors = singleHaircolors;
    console.log(this.hairColors);

  }

  getHeroesByHaircolors(hairColor: string){

    const filteredHaircolors = this.allHeroes.filter((hero: any) => {
      return hero.appearance['hair-color'].toLowerCase() === hairColor.toLowerCase();
    });
  
    this.actualHeroes = filteredHaircolors;
    this.page = 1;
  
  }

  //RESTART

  restartHeroes(){
    this.actualHeroes = this.allHeroes;
    this.search = "";
    this.noHeroesFound = false;
  }

  //PAGINATION

  OnchangePages(event:any){
    this.page=event;
  }

}
