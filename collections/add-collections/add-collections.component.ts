import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-collections',
  templateUrl: './add-collections.component.html',
  styleUrls: ['./add-collections.component.scss']
})
export class AddCollectionsComponent implements OnInit {

  paymentlst:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.paymentlst = [
      {option: 'Cash', id:0},
      {option: 'Cheque', id:1},
      {option: 'DD', id:2},
      {option: 'Online Payment', id:3},    
    ]
  }

  cancelCollection()
  {
    this.route.navigateByUrl('/sal/collections');

  }
}
