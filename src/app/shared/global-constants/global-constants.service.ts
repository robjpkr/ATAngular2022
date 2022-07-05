import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalConstantsService {

  constructor() { }

  public static baseAppUrl: string = 'https://localhost:7295/api/vehicle';
  //public static baseAppUrl: string = 'https://at2022.azurewebsites.net/api/vehicle';

  public static XAPIKey: string = 'Sakl439jkdsIHndjs0Ik';

  public static National: string[] = [
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

}
