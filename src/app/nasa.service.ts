import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {


  constructor(private http: HttpClient) { }


  getImageOfTheDay(): Observable<string> {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Qjcfitx9ylcfhwentIcrs5vIem7caOIdpQiaRYqB';
    return this.http.get<any>(apiUrl).pipe(
      tap(response => console.log(response.url)), // Log the actual URL from the response
      map(response => response.url) // Extract and return the image URL
    );
  }
}