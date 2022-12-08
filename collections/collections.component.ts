import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  ordersData: any[] =[];
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.ordersData = [
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
      { buyerName: '123 Agencies', location: 'Madurai(H)',date: '01/09/2022', status: 'Pending',
      orderedProducts:'SPIC - 13, Alfa - mix',totalAmount:'10500'},
  ];
}

editCollections()
{
  this.route.navigateByUrl('/sal/collections/add');
}

}
