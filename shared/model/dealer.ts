export class Dealer {
    id: string='';
    name: string='';
    phonenumber: string='';
    whatsupnumber: string='';
    location: string='';
    area:  Array<{code?:string, name?: string}>=[];
  }