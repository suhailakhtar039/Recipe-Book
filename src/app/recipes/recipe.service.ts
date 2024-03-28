import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    constructor(private slService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
            'Omelette',
            'Good for health and edible',
            'https://www.mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('salad',10)
            ]),
        new Recipe(
            'Burger',
            'Bad for health', 
            'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg',
            [
                new Ingredient('French fries', 10),
                new Ingredient('cola', 20)
            ])
    ]

    
    getRecipes(){
        return this.recipes.slice();
    }
    
    getRecipe(idx:number){
        return this.recipes[idx]
    }
    
    addIngredientsToShoppingList(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient)
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
    }

}