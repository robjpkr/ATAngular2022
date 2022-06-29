import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api-service/rest-api.service';
import { Vehicle } from '../shared/models/vehicle-model';
import { GlobalConstantsService } from '../shared/global-constants/global-constants.service';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.getAllVehicles();
  }

  getallvehicles: Vehicle[];
  selectnational = GlobalConstantsService.National
  distance:string = "National";
  
  getAllVehicles() {
    this.restApi.get("/GetAll").subscribe((data: Vehicle[]) => {
      this.getallvehicles = data;
      console.log(this.getallvehicles);
    });
  }

  inputPostCode(postcode: any){
    var a = postcode;
  }

  selectDistance(distance: any){

  }

  selectNational(event: any){

  }

  selectMake(event: any){

  }

  selectModel(event: any){
    
  }

  selectMinPrice(event: any){

  }

  selectMaxPrice(event:any){

  }
}
