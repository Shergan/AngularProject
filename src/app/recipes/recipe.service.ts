import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/4607/39683662521_be8473b850_b.jpg',
      [
        new Ingredient('Egg', 1),
        new Ingredient('Sugar', 5)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://live.staticflickr.com/4607/39683662521_be8473b850_b.jpg',
      [
        new Ingredient('Kitchen', 1),
        new Ingredient('Spoon', 4)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
