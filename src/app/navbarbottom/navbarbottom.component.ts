import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarbottom',
  templateUrl: './navbarbottom.component.html',
  styleUrls: ['./navbarbottom.component.css']
})
export class NavbarbottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blueborder0: boolean = false;
  blueborder1: boolean = false;
  blueborder2: boolean = false;
  blueborder3: boolean = false;

  clickEvent(e:any){
    if(e.currentTarget.id.toString().charAt(27) === "0"){
      this.blueborder0 = !this.blueborder0;       
    }
    if(e.currentTarget.id.toString().charAt(27) === "1"){
      this.blueborder1 = !this.blueborder1;       
    }
    if(e.currentTarget.id.toString().charAt(27) === "2"){
      this.blueborder2 = !this.blueborder2;       
    }
    if(e.currentTarget.id.toString().charAt(27) === "3"){
      this.blueborder3 = !this.blueborder3;       
    }
    
  }

}
