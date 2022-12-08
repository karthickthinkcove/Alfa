import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api';
// import { ExpenseConstants } from '../../model/constants';
// import { Expense } from '../../model/expense';




// import { MessageService, MenuItem } from "primeng/api";

// import * as FileSaver from 'file-saver';
// import jsPDF from 'jspdf';
// import "jspdf-autotable";
// import * as xlsx from "xlsx";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  months :any[];
  selectedYear: number;
  years: number[] = [];
  // expenseConstants: ExpenseConstants = new ExpenseConstants();
  // expenses: Expense = new Expense();

  statusId:number=1;
  statusList = [{Id:1,name:'Travel Expenses'},
  {Id:2,name:'Accommodation'},
  {Id:3,name:'Food Expenses'},
  {Id:4,name:'Allowance'}
  ]
  @Input() headers: any;
  @Input() dataSource: any;
  @Input() pdfdownload!: boolean;
  @Input() tblSearch!: boolean;
  @ViewChild('dt2') dt: Table | undefined;
  exportColumns: any;
  @Output() sendChildValue: EventEmitter<{ data: any, value: string }> = new EventEmitter<{ data: any, value: string }>();
  first = 0;

  rows = 10;
  items: MenuItem[] = [{
    label: 'Excel',
    icon: 'pi pi-file-excel',
    command: () => {
      this.exportExcel();
    }
  },
  {
    label: 'PDF',
    icon: 'pi pi-file-pdf',
    command: () => {
      this.exportPdf();
    }
  }
  ];
 

  constructor() {
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year <= 2070; year++) {
      this.years.push(year);
    }

    this.months= [];
    for (let i = 0; i <= 12; i++) {
      if(i!=0){
      this.months.push(('0'+i).slice(-2));
      }
    }

   }


  ngOnInit(): void {
    this.headers = this.headers.filter((f: any) => f.hideorShow);
    this.exportColumns = this.headers.map((col: any) => ({
      title: col.header,
      dataKey: col.field
    }));
  }

  rowActions(e: any, value: string) {
    this.sendChildValue.emit({ data: e, value: value });
  }


  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  exportPdf() {
    // //const doc = new jsPDF('l', 'mm', [305, 250]);

    // //autoTable(doc, { head: this.headers, body: this.dataSource });
    // //doc.save('products.pdf');
    // // const doc = new jsPDF();
    // const doc = new jsPDF('p', 'pt');
    // doc['autoTable'](this.exportColumns, this.dataSource);
    // // doc.autoTable(this.exportColumns, this.products);
    // doc.save("products.pdf");

  }

  exportExcel() {
    // const worksheet = xlsx.utils.json_to_sheet(this.dataSource, {
    //   header: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'End Date', 'Salary', 'Active', 'Actions'] });
    //   const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    //   const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    //   this.saveAsExcelFile(excelBuffer, "products");
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    // let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    // let EXCEL_EXTENSION = '.xlsx';
    // const data: Blob = new Blob([buffer], {
    //   type: EXCEL_TYPE
    // });
    // FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  


}
