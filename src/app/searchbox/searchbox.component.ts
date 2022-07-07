import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RestApiService } from '../shared/rest-api-service/rest-api.service';
import { Vehicle } from '../shared/models/vehicle-model';
import { GlobalConstantsService } from '../shared/global-constants/global-constants.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { NgbPaginationLast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(private restApi:RestApiService, private http:HttpClient, private elem: ElementRef ) {}
  
  allVehicles: Vehicle[];
  vehicleCount:number;
  ptPlaceHolder:string = "Postcode";
  postcode:string;
  exists:any;
  showWarningMessage:string = 'false';
  national:string = 'National';
  nationalOptions: string[] = [
    "Within 20 miles",
    "Within 40 miles",
    "Within 60 miles",
    "Within 80 miles",
    "Within 100 miles",
    "Within 120 miles",
    "Within 140 miles",
    "Within 160 miles",
    "Within 180 miles",
    "National"
  ];

  ngOnInit() {
    this.getAllVehicles();
    this.getVehicleCount();
  }

  getAllVehicles() {
    this.restApi.get("/GetAll").subscribe((data: Vehicle[]) => {
      this.allVehicles = data;
    });
  }

  getVehicleCount() {
    this.restApi.getSingle("/GetCountOfVehicles").subscribe((data:number) => {
      this.vehicleCount = data;
    });
  }

  clickPostcodeTextBox(e:Event){
    this.ptPlaceHolder = "";
  }

  async focusOutPostcodeTextBox(e:Event){
    debugger;
    let postcodeExists  = await lastValueFrom(
      await this.http.get("https://api.postcodes.io/postcodes/" + this.postcode)
      ).catch((err) => 
        { console.log(err) }
      );
    if(postcodeExists == undefined){
      this.postcode = "";
      this.showWarningMessage = 'true';
      this.ptPlaceHolder = "Postcode";

    }
    else{  
      this.showWarningMessage = '';
    }   
  }
}
