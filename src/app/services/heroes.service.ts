import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: any[]=[]

  constructor(private http: HttpClient) { }

  async getHeroes(): Promise<any> {
    if (this.heroes.length > 0) {
      return this.heroes;
    } else {
      try {
        this.heroes = [];
        for (let i = 1; i <= 100; i++) {
          let response = await fetch('https://superheroapi.com/api.php/6601680059852276' + '/' + i);
          let data = await response.json();
          this.heroes.push(data);
        }
        return this.heroes;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }

  getHeroeById(id: number): any{
    return this.heroes.find((hero: any) => hero.id === id)!;
  }


}
