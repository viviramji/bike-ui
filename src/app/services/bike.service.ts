import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  Headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    return this.http.get('/server/api/v1/bikes');
  }
}
