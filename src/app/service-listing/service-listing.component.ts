import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface PeriodicElement {
  serialno: number;
  bussgrp: string;
  serviceid: string;
  description: string;
  projectname: string;
  owner: string;   
}

const ELEMENT_DATA: PeriodicElement[] = [
  {serialno:1, bussgrp:'I02' , serviceid:'I020001' , description:'View Partner functions of an agent' , projectname:'DOD Project' , owner:'DOD Project CRM' },
  {serialno:2, bussgrp:'I02' , serviceid:'I020003' , description:'Sales area mapping with Payment Method' , projectname:'DOD Project' , owner:'DOD Project CRM' },
  {serialno:3, bussgrp:'I02' , serviceid:'I020008' , description:'CRM - Fiori Dispatch Report - BOE Details' , projectname:'CRM Fiori' , owner:'DS_CRMUSER' },
  {serialno:4, bussgrp:'I03' , serviceid:'I030002' , description:'Vendor - Contact Details' , projectname:'ERFX Project' , owner:'Ajit Parab' },
  {serialno:5, bussgrp:'I03' , serviceid:'I030003' , description:'Vendor  - Name & Address' , projectname:'ERFX Project' , owner:'Ajit Parab' },
  {serialno:6, bussgrp:'I03' , serviceid:'I030005' , description:'PO History Data' , projectname:'ERFX Project' , owner:'Ajit Parab' },
  {serialno:7, bussgrp:'I03' , serviceid:'I030008' , description:'WPM - Link equiment master with PO and item' , projectname:'WPM Project' , owner:'Darshana Shah' },
  {serialno:8, bussgrp:'I04' , serviceid:'I040001' , description:'Insurance Location Master' , projectname:'Insurance Platform' , owner:'Anindya Basu' },
  {serialno:9, bussgrp:'I04' , serviceid:'I040003' , description:'Insurance Business Area Master' , projectname:'Insurance Platform' , owner:'Anindya Basu' },
  {serialno:10, bussgrp:'I05' , serviceid:'I050004' , description:'Review Change documents of vendor and customer' , projectname:'Master Data' , owner:'Maulin Khambhata'}
]


@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.css']
})



export class ServiceListingComponent implements OnInit {
  columnsToDisplay: string[] = ['serialno','bussgrp','serviceid','description','projectname','owner','displaybutton'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private router: Router) { }
  
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  OnDisplay(): void{
    this.router.navigate(["display"]);
  }

}

