import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LangService {


    languageInfo() {
        return this.http.get(
            'http://localhost:8081/api/v1/language/all'
        );
    }
    



    constructor(private http: HttpClient) { }
}
