import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
menuList:any[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.menuList=[
      {id:0,name:'Home',icon:'home',route:'/sal/dashboard'},
       {id:1,name:'Expenses',icon:' monetization_on',route:'/sal/expenses'},
       {id:2,name:'Orders',icon:'edit_document',route:'/sal/orders'},
       {id:3,name:'Collections',icon:'account_balance_wallet',route:'/sal/collections'}
    ]
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
