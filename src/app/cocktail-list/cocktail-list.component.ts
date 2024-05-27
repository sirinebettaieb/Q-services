import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor , CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit{
  cocktails: any[] = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
  

}
