import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inputdetails',
  templateUrl: './inputdetails.component.html',
  styleUrls: ['./inputdetails.component.scss']
})
export class InputdetailsComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }
  adddetails(f){
    console.log('Form submitted.',f);
  }
  onclick(){

  }
}
