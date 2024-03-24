import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;

  constructor(private recipeService:RecipeService, private route:ActivatedRoute){}
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params)=>{
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
}
