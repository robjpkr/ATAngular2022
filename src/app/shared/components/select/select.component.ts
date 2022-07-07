import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() options: any;
  @Input() title: any;

  dropdownOpen:boolean = false;
  dropdown:string;

  ngOnInit(): void {
  }

  clickDropDownOption(opt:string){
    this.dropdownOpen = false;
    this.title = opt;
    let within = document.getElementsByClassName("dropdown-option");
  }

  clickDropDownTextBox(targetElement:Event){
    this.dropdownOpen = true;
    this.title = "";
  }

  hideDropdown(){
    debugger;
    if(this.title == "National" || this.title == ""){
      this.dropdownOpen = false;
      this.title = "National";
    }
  }
}
