
import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/shared/model/expense';
import { ExpensesService } from 'src/app/shared/service/expenses.service';

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.scss']
})
export class ApprovedRequestComponent implements OnInit {
  columns: any;
  data:any;
  download!: boolean;
  search!: boolean;
 

  constructor(private expenseService:ExpensesService) { }
  expenseData: Expense[] =new Array<Expense>();
  expenseList: Expense[] =new Array<Expense>();

  ngOnInit(): void {
    this.loadColumns();
    this.download = true;
    this.search = false;
    this.expenseslist();
    
  }

  loadColumns() {
    this.columns = [
      { field: 'enterDate', header: 'date', style: { width: '100px', color: "", alignment: "" }, toolTip: 'date', sortfield: true, hideorShow: true },
      { field: 'day', header: 'day', style: { width: '100px' }, color: "", toolTip: 'Day', sortfield: true, hideorShow: true, chip: true },
      { field: 'vehicleNo', header: 'vehicleNo', style: { width: '100px', color: "", alignment: "" }, toolTip: 'vehicleNo', sortfield: true, hideorShow: true },
      { field: 'openingKm', header: 'openingKm', style: { width: '100px', color: "" }, toolTip: 'openingKm', sortfield: true, hideorShow: true },
      { field: 'closingKm', header: 'closingKm', style: { width: '100px', color: "" }, toolTip: 'closingKm', sortfield: true, hideorShow: true, },
      { field: 'expenseAmount', header: 'expenseAmount', style: { width: '100px', color: "" }, toolTip: '', sortfield: true, hideorShow: true,},
      // { field: 'salary', header: 'Salary', style: { width: '100px' }, color: "#1abdcf", toolTip: 'Salary', sortfield: true, hideorShow: true, type: 'currency', chip: true },
      // { field: 'active', header: 'Active', style: { width: '100px' }, class: "helper-legend legend-delete", toolTip: 'Active', sortfield: false, hideorShow: true, type: 'boolean' },
      // { field: 'actions', header: 'Actions', style: { width: '100px', color: "" }, toolTip: 'Actions', sortfield: false, hideorShow: true, type: 'actions', rowActions: ["delete", "view"] }
    ];
  }

 expenseslist() {
  
    this.expenseService.getExpenses().subscribe((res: any[]) =>{
      this.expenseData=this.expenseList=res;
    });   
  }
  rowAction(e: any) {
    alert(e.data.name + "Actions" + e.value);
  }

}
