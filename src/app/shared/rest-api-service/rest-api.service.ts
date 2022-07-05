import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GlobalConstantsService } from '../global-constants/global-constants.service';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {

  constructor(private http: HttpClient) {}

  apiURL = GlobalConstantsService.baseAppUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key' : GlobalConstantsService.XAPIKey
    }),
  };

  get(route: string): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiURL + route, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getSingle(route: string): Observable<any> {
    return this.http
      .get<any[]>(this.apiURL + route, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getById(id: any): Observable<any> {
    return this.http
      .get<any>(this.apiURL + "/GetById?id=" + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create vehicle
  // createVehicle(vehicle: any): Observable<Vehicle> {
  //   return this.http
  //     .post<Vehicle>(
  //       this.apiURL + '/vehicle',
  //       JSON.stringify(vehicle),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // HttpClient API put() method => Update vehicle
  // updateVehicle(id: any, vehicle: any): Observable<Vehicle> {
  //   return this.http
  //     .put<Vehicle>(
  //       this.apiURL + id,
  //       JSON.stringify(vehicle),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // HttpClient API delete() method => Delete employee
  // delete(id: any) {
  //   return this.http
  //     .delete<Vehicle>(this.apiURL + id, this.httpOptions)
  //     .pipe(retry(1), catchError(this.handleError));
  // }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;
    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}