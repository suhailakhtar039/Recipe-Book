import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put('https://ng-recipe-guide-8b69c-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
            })
    }

    fetchRecipes() {
        this.http
            .get<Recipe[]>('https://ng-recipe-guide-8b69c-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                })
            }))
            .subscribe(response => {
                this.recipeService.setRecipes(response)
            })
    }

}