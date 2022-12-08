import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter,Injectable } from '@angular/core';
import { catchError, Observable, throwError as observableThrowError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  url: string = environment.URL;
  
  navchange: EventEmitter<number> = new EventEmitter();
    constructor(private http: HttpClient,public _snackBar: MatSnackBar) { }

  get windowRef() {
    return window
  }
  
    // temporary handle error method
    handleError(error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      //console.error(errMsg);
      return observableThrowError(errMsg);
    } 
    
    getbuyer() {
      let dataUrl = `${this.url}dealer`;
      return this.http.get<any>(dataUrl).pipe(catchError(this.handleError))
    }

    getProducts() {
      let dataUrl = `${this.url}product`;
      return this.http.get<any>(dataUrl).pipe(catchError(this.handleError))
    }
    confirmationDialogConfig: MatDialogConfig = {
      disableClose: true,
      hasBackdrop: true,
      backdropClass: "",
      width: "30%",
      height: "35%",
      position: {
        top: "",
        bottom: "",
        left: "",
        right: ""
      }
    };

    configSuccess: MatSnackBarConfig = {
      panelClass: ['style-success'],
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    };
  
    configError: MatSnackBarConfig = {
      panelClass: ['style-error'],
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    };

    snackbarSuccess(message:string) {
      this._snackBar.open(message, 'close', this.configSuccess);
    }
  
    snackbarError(message:string) {
      this._snackBar.open(message, 'close', this.configError);
    }
  }
  