import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


export interface resultForm {
  letter: string;
  count: number;
}

const ELEMENT_DATA: resultForm[] = [
  {letter: 'A', count: 5},
  {letter: 'B', count: 7},
  {letter: 'C', count: 3},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['letter', 'count'];
  dataSource = new MatTableDataSource<resultForm>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
