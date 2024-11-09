import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyHeirshipReceiptService } from 'app/modules/desk1/property/application/heirship/file_close/details/receipt/receipt.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import{ ViewPropertyHeirshipReceiptModule } from 'app/modules/desk1/property/application/heirship/file_close/details/receipt/receipt.module'
@Component({
    selector       : 'ViewPropertyHeirshipReceipt',
    templateUrl    : './receipt.component.html',
    styleUrls  : ['./receipt.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyHeirshipReceiptComponent implements OnInit
{
  

    application_id:number=0;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
   

    pta : any;
    dataSource: MatTableDataSource<ViewPropertyHeirshipReceiptModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['srno','purchaser_name','receipts'];
    /**
     * Constructor
     */
    constructor(
        private _viewPropertyHeirshipReceiptService: ViewPropertyHeirshipReceiptService,
        private _router: Router,
        private _masterService:MastersService,
        private _activatedRoute: ActivatedRoute
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._activatedRoute.params.subscribe(params => {
            //console.log(params) //log the entire params object
            this.application_id=params['code'];
          });
       

        this._masterService.getPropertyTransferData(this.application_id)
        .subscribe(() => {
            if (this._masterService.data$.source['_value'].status != 200) {
                // Set the alert
                
            } else {
                this.pta = this._masterService.data$.source['_value'].data;
                console.log(this.pta);
                console.log(this.pta.heirshipee);
                this.dataSource.data = this.pta.heirshipee;
                
            }
        })        
    }
    /**
     * On destroy
     */
    
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    dummyBinding():void{

    }
 
     keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    
   
   
}
