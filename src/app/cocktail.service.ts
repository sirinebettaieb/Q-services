import { Injectable } from '@angular/core';
interface Cocktail {
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }
  getCocktails(): Cocktail[] {
    return [
      { name: 'Mojito', price: 8.5, image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Mojito.jpg' },
      { name: 'Pina Colada', price: 9.0, image: 'pina-colada.jpg' },
      { name: 'Caipirinha', price: 8.0, image: 'caipirinha.jpg' }
    ];
  }
}
