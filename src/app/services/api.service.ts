import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable()

export class ApiService {
  constructor(private http: HttpClient) { }

  private SERVER_URL = 'https://bpdts-test-app.herokuapp.com/city/London/users';

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getUsers() {
    return this.http.get(this.SERVER_URL);
  }


  getDistanceFromLatLon(lat1, lon1, lat2, lon2, units) {
    const deg2Rad = deg => {
      return deg * Math.PI / 180;
    };
    const Radius = 3959; // Radius of the earth in miles
    const dLat = deg2Rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2Rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2Rad(lat1)) * Math.cos(deg2Rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    const C = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const Distance = Radius * C;
    const Miles = Distance / 1.609344;

    if (units === 'km') {
      return Distance;
    } else {
      return Miles;
    }
  }

}





