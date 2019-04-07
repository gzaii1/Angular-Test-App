import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredent[]=[
      new Ingredent('apples',5),
      new Ingredent('lemon',6)

  ];
  constructor() { }

  ngOnInit() {
  }

}
