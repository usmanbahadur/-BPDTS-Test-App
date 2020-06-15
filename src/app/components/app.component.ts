import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BPDTS-Test-App';
  LonUsers: Array<Users>;
  UsersByRadius = [];
  Users = '';
  miles = 50;
  distance;
  user;
  Newuser;
  // Latitude and longitude of London
  LONDON_LAT = 51.509865;
  LONDON_LONG = -0.118092;

  constructor(private apiService: ApiService, private httpClient: HttpClient) {
  }
  onNameKeyUp(event: any) {
    this.Users = event.target.value;
  }

  getUsers() {

    this.httpClient.get('/assets/data.json').pipe(map(data => data as Array<Users>))
      .subscribe(data => {
        this.LonUsers = data;
      });

    this.httpClient.get('/assets/users.json').pipe(
      map(data => data as Array<Users>)
    ).subscribe(result => {
      console.log(result);
      result.forEach(item => {
        const distance = this.apiService.getDistanceFromLatLon(item.latitude, item.longitude, this.LONDON_LAT, this.LONDON_LONG, 'ml');
        if (distance <= this.miles) {
          this.UsersByRadius.push({
            id: item.id,
            first_name: item.first_name,
            last_name: item.last_name,
            email: item.email,
            ip_address: item.ip_address,
            latitude: item.latitude,
            longitude: item.longitude,

          });
        }
      });

    });


  }

  ngOnInit() {

  }

  onSearchChange(serchValue: string): void {
    console.log(serchValue);


  }
}



