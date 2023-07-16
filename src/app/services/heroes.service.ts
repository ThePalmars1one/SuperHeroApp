import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  async getHeroes(): Promise<any> {
    try {
      const heroes = [];
      for (let i = 1; i <= 10; i++) {
        let response = await fetch('https://superheroapi.com/api.php/6601680059852276' + '/' + i);
        let data = await response.json();
        console.log(data)
        heroes.push(data);
      }
      return heroes;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


}
