import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  expenseData: any[] =[];
  expenseList:any[]=[];
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.expenseData = [
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
      { expenseCategory: 'Travel expenses', type: 'Owned vehicle',date: '01/09/2022', vehicleNo: '63883', 
      openingKm: '6787', closingkM: '6800',travelAmount: '200', status: 'Pending',journey:'Palani,Dindigul'},
  ];
  this.expenseList=Object.assign([], this.expenseData);
  this.expenseList=this.expenseList.splice(0,3);
  }

  viewMore(){
    this.expenseList=JSON.parse(JSON.stringify(this.expenseData));
  }

  addExpense(){
    this.route.navigateByUrl('/sal/expenses/add');
  }

  editExpense(value:any)
  {
    this.route.navigateByUrl('/sal/expenses/add');
  }


}
