import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement1 {
  Object_Class: string;
  System: string;
  Object_Id: number;
  Change_No: number;
  Table_Name: string;
  Field_Name: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 406748, Change_No: 61508699, Table_Name: 'KNA1', Field_Name: 'J_1KFREPRE'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 706748, Change_No: 21508666, Table_Name: 'KNB1', Field_Name: 'TAXKD'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 406748, Change_No: 21308666, Table_Name: 'KNB1', Field_Name: 'J_1KFREPRE'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 606748, Change_No: 12345666, Table_Name: 'KNVI', Field_Name: 'J_1KFREPRE'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 806748, Change_No: 46758666, Table_Name: 'KNA1', Field_Name: 'TELF2'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 406749, Change_No: 98765666, Table_Name: 'KNVI', Field_Name: 'NAME2'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 406748, Change_No: 63458699, Table_Name: 'KNB1', Field_Name: 'NAME3'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 706748, Change_No: 91008666, Table_Name: 'KNA1', Field_Name: 'J_1KFREPRE'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 406748, Change_No: 24508666, Table_Name: 'KNA1', Field_Name: 'NAME4'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 606748, Change_No: 36745666, Table_Name: 'KNVI', Field_Name: 'J_1KFREPRE'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 806748, Change_No: 78058666, Table_Name: 'KNB1', Field_Name: 'PSTLZ'},
  {System: 'MP1', Object_Class: 'DEBI', Object_Id: 406749, Change_No: 35465666, Table_Name: 'KNA1', Field_Name: 'J_1KFREPRE'},
  
];


@Component({
  selector: 'app-service-results',
  templateUrl: './service-results.component.html',
  styleUrls: ['./service-results.component.css']
})
export class ServiceResultsComponent implements OnInit {
  displayedColumns: string[] = ['System', 'Object_Class', 'Object_Id', 'Change_No','Table_Name','Field_Name'];
  dataSource1 = new MatTableDataSource (ELEMENT_DATA1);
  constructor() { }

  @ViewChild(MatSort,{static:true}) sort: MatSort;
  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator= this.paginator;
  }

}
