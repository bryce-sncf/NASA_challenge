import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NasaService {
 baseUrl : string = 'https://api.nasa.gov/planetary/apod?api_key=';
 apiKey : string = "dqlK7yk7Pz2YYfQPzvDLWecs7qZzN6dX5EIYqCiI";

  constructor(private http: HttpClient) {}

   getImageOfTheDay (): Observable<any> {
const url = this.baseUrl + this.apiKey;
return this.http.get(url);
   }
    
}

