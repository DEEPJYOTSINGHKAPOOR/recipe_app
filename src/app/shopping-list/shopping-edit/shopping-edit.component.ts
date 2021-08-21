import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true })
  nameInput: ElementRef;

  @ViewChild('amountInput', { static: true })
  amountInput: ElementRef;

  @Output() newItemEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewIngredient() {
    const   i: Ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.newItemEvent.emit(i);
  }

}
