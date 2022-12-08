import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
  text:string;
  constructor(private modalRef: MatDialogRef<DialogConfirmComponent>,private commonService:CommonService) { }

  ngOnInit(): void {
  }

  confirm() {   
    this.modalRef.close(true);
  }
  cancel() {
    this.modalRef.close();
  }

}
