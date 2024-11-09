import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyHeirshipDocumentService } from 'app/modules/financial-controller/property/application/heirship/certificate/details/document/document.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import{ ViewPropertyHeirshipDocumentModule } from 'app/modules/financial-controller/property/application/heirship/certificate/details/document/document.module'
@Component({
    selector       : 'ViewPropertyHeirshipDocument',
    templateUrl    : './document.component.html',
    styleUrls  : ['./document.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyHeirshipDocumentComponent implements OnInit
{
  

    application_id:number=0;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
   

    pta : any;
    dataSourceAttendee: MatTableDataSource<ViewPropertyHeirshipDocumentModule> = new MatTableDataSource([]);
    displayedColumnsAttendee: string[] = ['srno','attendee_name','photo'];
   
    dataSource: MatTableDataSource<ViewPropertyHeirshipDocumentModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['srno','purchaser_name','documents'];
    /**
     * Constructor
     */
    constructor(
        private _viewPropertyHeirshipDocumentService: ViewPropertyHeirshipDocumentService,
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
                this.dataSourceAttendee.data = this.pta.attendee;
                
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


     
 
     keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    
   
   
}
