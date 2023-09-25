import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get("http://localhost:8443/api/v1/items/view",  { responseType: 'json'})
  }
}
