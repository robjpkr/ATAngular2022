import { Dealer } from './dealer-model';
import { Images } from './images-model';
import { StandardEquipment } from './standard-equipment-model';
import { EngineInfo } from './engine-info-model';

export class Vehicle {
   id: number;
   vehicleID: string;
   make: string;
   model: string;
   version: string;
   year: string;
   price:string;
   roadTax: string;
   insuranceGroup:string;
   bodyType: string;
   distanceFromCustomerPostCode: string;
   timeFromCustomerPostCode: string;
   mrrp: string;
   save:string;
   longitute: string;
   latitude: string;
   minPrice: string;
   maxPrice: string;
   distance: string;
   engineInfo: EngineInfo;
   dealer: Dealer;
   images: Images[];
   standardEquipment: StandardEquipment;
}
