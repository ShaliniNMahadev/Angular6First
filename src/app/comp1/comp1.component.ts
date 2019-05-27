import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { list } from '../datalist';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  // name = 'Shalini';
  // education = "BE";
  // employee = "Talentpod";
  // place = "Bangalore";

  // detail: Data = {
  //   title: 'My Application',
  //   id: 20,
  //   name: 'shalu',
  //   designation: 'who knows',
  //   place: 'bangalore'
  // };
  
  datalist=list;
dataselect:Data;


  constructor() { }

  ngOnInit() {
   // console.log(this.datalist);
    
  }
  onSelect(n: Data): void {
   this.dataselect = n;
  }

}
