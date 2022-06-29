import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api-service/rest-api.service';
import { Vehicle } from '../shared/models/vehicle-model';

@Component({
  selector: 'app-newcardeals',
  templateUrl: './newcardeals.component.html',
  styleUrls: ['./newcardeals.component.css']
})
export class NewcardealsComponent implements OnInit {

  constructor(public restApi: RestApiService) { }

  newvehicles: Vehicle[];

  ngOnInit(): void {
    this.getMainPageNewVehicles('/GetMainPageNewVehicles');
  }

  getMainPageNewVehicles(route: string){
    this.restApi.get(route).subscribe((data: Vehicle[]) => {
      this.newvehicles = data;
    });
  }
}
