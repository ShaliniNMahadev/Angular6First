import { Component, OnInit,Input } from '@angular/core';
import{Data} from '../data';

@Component({
  selector: 'app-comp-detail',
  templateUrl: './comp-detail.component.html',
  styleUrls: ['./comp-detail.component.css']
})
export class CompDetailComponent implements OnInit {
@Input() data:Data;
  constructor() { }

  ngOnInit() {
  }

}
