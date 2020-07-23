import { Component, OnInit } from '@angular/core';
import { InputdeatilsService } from '../../service/deatils/inputdeatils.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inputdetails',
  templateUrl: './inputdetails.component.html',
  styleUrls: ['./inputdetails.component.scss']
})
export class InputdetailsComponent implements OnInit {

  counter:number=0;
  constructor(private service: InputdeatilsService) { }
  ngOnInit(): void {
  }
  // adddetails(f:NgForm){
  //   console.log('Form submitted.',f);
  // }
  onclick(f:NgForm){
    this.service.adddeatils({
      name: f.value.name,
      qgiven: f.value.qgiven,
      givendate :f.value.givendate,
      qrecieved: f.value.qrecieved,
      recieveddate: f.value.recieveddate,
    });
  }
}
