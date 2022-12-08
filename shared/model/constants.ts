export class Constants {
    id!:number;
    value!:string;
    type!:string;
}


export class ExpenseConstants{
    expenseCategory:Constants[]=new Array<Constants>();
    expenseTypes:Constants[]=new Array<Constants>();
    journeyLocations:Array<{id:number,name:string}>=new Array<{id:number,name:string}>();
    
   
}

// export class OrderConstants
// {
//   buyerNames:Array<{id:number,name:string,location:string}>=new Array<{id:number,name:string,location:string}>();
//   products:Array<{id:number,name:string,amount:number}>=new Array<{id:number,name:string,amount:number}>();
// }