import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': 'bda53789-d59e-46cd-9bc4-2936630fde39'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiCatsService {

  private apiUrl = environment.apiUrl+'breeds';

  
  
  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl, httpOptions);
  }

}
