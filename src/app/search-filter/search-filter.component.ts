import { Component, OnInit } from '@angular/core';
export interface BusinessGroup{
  value: string;
}

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  searched = false;
  busgrp: string[] = ['Enterporise IT-PNC','Enterprise IT-FCNA','MDG'];
  constructor() { }

  ngOnInit() {
    
    this.searched = false;
    //alert("Search unsuccessful!");
    console.log(this.searched);
  };

  OnSearch() {
    this.searched = true;
    //alert("Search successful!");
    console.log(this.searched);
  }

}
