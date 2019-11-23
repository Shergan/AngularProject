import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/4607/39683662521_be8473b850_b.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://live.staticflickr.com/4607/39683662521_be8473b850_b.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
