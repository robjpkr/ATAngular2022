import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../shared/models/vehicle-model';
import { RestApiService } from '../shared/rest-api-service/rest-api.service';

@Component({
  selector: 'app-vehiclepage',
  templateUrl: './vehiclepage.component.html',
  styleUrls: ['./vehiclepage.component.css']
})
export class VehiclepageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public restApi: RestApiService) { }

    vehicleID: string | null;
    vehicle: Vehicle;
    imagesArray: string[];

  async ngOnInit() {
            await this.route.paramMap.subscribe(params => { this.vehicleID = params.get('vehicleID'); });
            await this.restApi.getById(this.vehicleID).subscribe(async (data: Vehicle) => {
              this.vehicle = data;
            });
  }

  fadeImage(index:number){
    console.log(index);
  }
}
