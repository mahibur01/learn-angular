import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  color = '';
  size = 'M';
  priceTo = 0;
  priceFrom = 0;

  constructor(private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe(params =>{
      this.color = params.color;
      this.size = params.size;
      this.priceTo = params.priceTo;
      this.priceFrom = params.priceFrom;
      // console.log(params);
    })
   }

  ngOnInit(): void {
  }

}
