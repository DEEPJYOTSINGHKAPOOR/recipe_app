import { Ingredient } from './../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {



  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  newItemAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }



}
