export class Expense {
    id!: string;
    code: string = '';
    category: any;
    travelType!: string;
    enterDate!:  Date;
    vehicleNo: string='';
    openingKm:number;
    closingKm:number;
    expenseAmount:number;
    billAttachment: Array<{id?:number, name?: string, size?:number }>=[];
    particularsJourney:Array<{
      id?:number ,
      name: string 
      }>=[];
    createdBy: string = '';
    createDate!: Date;
    updatedBy: string = '';
    updatedDate!: Date;
    active:boolean=true;
    expenseslist: Array<{id?:number, name?: string, size?:number }>=[];
    
}
