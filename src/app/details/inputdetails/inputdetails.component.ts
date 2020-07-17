import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdetails',
  templateUrl: './inputdetails.component.html',
  styleUrls: ['./inputdetails.component.scss']
})
export class InputdetailsComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }
  adddetails(userform){
    console.log('Form submitted.',userform);
  }
}
