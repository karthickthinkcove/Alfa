export class Product {
    id: string='';
    name: string='';
    hsnCode!: number;
    pack: string='';
    unitCase!: number;
    mrp!: number;
    tax!: number;
    category: string='';
    active:boolean=true;
    createdBy: string = '';
    createDate!: Date;
    updatedBy: string = '';
    updatedDate!: Date;   
    
}
