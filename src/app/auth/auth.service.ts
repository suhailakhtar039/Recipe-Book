import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

interface AuthResponseData{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
}

@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient){}
    signup(email:string, password:string){
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-51Fkt4S6wHT3PwtYNZhTaIuISvRu-w4',{
                email:email,
                password:password,
                returnSecureToken:true
            })
            .pipe(catchError(
                errorRes =>{
                    let errorMessage = ' An unknown error occured';
                    if(!errorRes.error || !errorRes.error.error){
                        return throwError(errorMessage);
                    }
                    switch(errorRes.error.error.message){
                        case 'EMAIL_EXISTS':
                            errorMessage = 'This email already exists';
                    }
                    return throwError(errorMessage);
                }
            ))
    }
}