import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  setHeader() {
    let path = this.route.url.split('/')[2];
    this.title = decodeURIComponent(path);
  }

}
