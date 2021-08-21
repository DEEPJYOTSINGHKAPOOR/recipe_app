import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelectedItem: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeDetailItem(recipe: Recipe) {
    this.recipeSelectedItem = recipe;
  }

}
