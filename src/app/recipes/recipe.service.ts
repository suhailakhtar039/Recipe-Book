import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
            'Momos',
            'Bad for health',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
            [
                new Ingredient('Meat',1),
                new Ingredient('salad',10)
            ]),
        new Recipe(
            'Salad',
            'Good for health', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
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
}