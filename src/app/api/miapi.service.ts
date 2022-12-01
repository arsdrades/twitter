import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiapiService {
  constructor(private http: HttpClient) { }
  GetUsuarios(): Observable<any> {
    return this.http
      .get(
        'http://127.0.0.1:4000/usuarios',
      )
      .pipe(tap((_) => console.log("cargaron los usuarios")));
  }
}

