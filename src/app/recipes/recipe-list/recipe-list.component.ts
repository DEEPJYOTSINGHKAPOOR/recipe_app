import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedDispatcher = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test desc',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
    new Recipe('Pizza', 'This is a pizza!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bBfDDBSF89C0T5QTXe0BOJuPp5qJYtVavg&usqp=CAU'),
    new Recipe('A test recipe3', 'test desc3',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
    new Recipe('A test recipe4', 'test desc4',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg'),
    new Recipe('A test recipe5', 'test desc5',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    // console.log('Recipe dipatched from recipeList to recipes compo: ' + recipe.name);

    this.recipeSelectedDispatcher.emit(recipe);
  }

}
