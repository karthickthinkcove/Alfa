export class Order
{
    id!: number;
    code: string='';
    buyerName:string='';
    addedProducts: Array<{
        name: string ,
        description: string ,
        amount: number,
        quantity: number ,
        totalAmount: number
    }>=[];
    createdBy: string = '';
    createDate!: Date;
    updatedBy: string = '';
    updatedDate!: Date;
    active:boolean=true;
    orderslist: Array<{id?:number,buyerName?: string }>=[];

  };