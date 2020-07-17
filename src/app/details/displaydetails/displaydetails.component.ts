import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.scss']
})
export class DisplaydetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showdetails(){
    console.log("Information is Displayed.");
  }
}
