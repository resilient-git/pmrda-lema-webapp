import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyHeirshipApplicationService } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/application/application.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import{ ViewPropertyHeirshipApplicationModule } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/application/application.module'
@Component({
    selector       : 'ViewPropertyHeirshipApplication',
    templateUrl    : './application.component.html',
    styleUrls  : ['./application.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyHeirshipApplicationComponent implements OnInit
{
  

    application_id:number=0;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
   

    pta : any;
    dataSource: MatTableDataSource<ViewPropertyHeirshipApplicationModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['id','first_name','middle_name','last_name','email','mobile'];
    /**
     * Constructor
     */
    constructor(
        private _viewPropertyHeirshipApplicationService: ViewPropertyHeirshipApplicationService,
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


     
 
     keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    
   
   
}
