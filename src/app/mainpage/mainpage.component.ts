import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api-service/rest-api.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent implements OnInit {


  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
  }


}
