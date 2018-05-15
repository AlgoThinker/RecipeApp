import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test',
                                'https://www.maxpixel.net/static/photo/2x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg'),
                                new Recipe('A Test Recipe', 'This is simply a test',
                                'https://www.maxpixel.net/static/photo/2x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg')];

  constructor() { }

  ngOnInit() {
  }

}
