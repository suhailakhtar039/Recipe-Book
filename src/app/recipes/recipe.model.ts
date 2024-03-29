import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];
    // constructor(){}
    constructor(name:string, desc:string, imagePath:string, ingredeints:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredeints;
    }
}