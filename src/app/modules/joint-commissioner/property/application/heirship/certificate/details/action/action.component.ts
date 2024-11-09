import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyHeirshipActionService } from 'app/modules/joint-commissioner/property/application/heirship/certificate/details/action/action.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import{ ViewPropertyHeirshipActionModule } from 'app/modules/joint-commissioner/property/application/heirship/certificate/details/action/action.module'
@Component({
    selector       : 'ViewPropertyHeirshipAction',
    templateUrl    : './action.component.html',
    styleUrls  : ['./action.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyHeirshipActionComponent implements OnInit
{

    approveForm: FormGroup;
    rejectForm: FormGroup;
    application_id:number=0;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
   
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
      };
    showAlert: boolean = false;

    pta : any;
    dataSource: MatTableDataSource<ViewPropertyHeirshipActionModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['srno','purchaser_name','actions'];
    /**
     * Constructor
     */
    constructor(
        private _viewPropertyHeirshipActionService: ViewPropertyHeirshipActionService,
        private _router: Router,
        private _formBuilder: FormBuilder,
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
       
        this.approveForm = this._formBuilder.group({
           // schedule_time : ['', Validators.required],
            created_by:[],
            created_at:[] 
          });
      
        this.rejectForm = this._formBuilder.group({
          reason : ['', Validators.required],
          created_by:[],
          created_at:[]
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

    /*
  SEND APPROVAL
  */
  sendApproval(): void {
    if (this.approveForm && this.approveForm.invalid) {
        return;
    }
    // Disable the form
    if (this.approveForm) {
      // Disable the form
      this.approveForm.disable();
    }
    // this.approveForm.disable();

    // Hide the alert
    this.showAlert = false;
  if(this.approveForm && this.approveForm.value){
    this.approveForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
    this.approveForm.value['app_id'] = this.application_id;

    
   // this.propertyHeirshipForm.value.user_property_code = this._activatedRoute.params['_value'].code;
     console.log(this.approveForm.value);}
    /*
    if(this.pd.heirship_id>0){
        this.getHeirshipee(this.pd.heirship_id);
    }*/
   
    this._viewPropertyHeirshipActionService.approveJointCommissioner(this.approveForm.value)
        .subscribe((response) => {
            if (response.status != 200) {
                // Re-enable the form
                this.approveForm.enable();
                // Reset the form
                this.approveForm.reset();
                // Set the alert
                //this.heirshipee_response=response.response;
                this.alert = {
                    type: 'error',
                    message: response.response
                };
                // Show the alert
                this.showAlert = true;
            } else {
               this._router.navigateByUrl('/joint-commissioner/heirship-applications/certificate-pending');
                /*this.pd.heirship_id = response.heirship_application_id
                this.getHeirshipee(this.pd.heirship_id);
                // Re-enable the form
                this.approveForm.enable();
                // Reset the form
                this.approveForm.reset();
                this.heirshipee_response="Heirshipee details shaved successfuly.";*/
                // Navigate to the confirmation required page
                // this._router.navigateByUrl('/citizens/fees');
                //this._router.navigateByUrl('/citizens/heirship-applications-details/' +  this.propertyHeirshipForm.value['user_id']);
                //this._router.navigateByUrl('/citizens/fees/2');
             /// this._router.navigateByUrl('/citizens/heirship-application/fees/'+this.propertyHeirshipForm.value['user_property_code']+'/'+response.heirship_application_id);
            }
          },(response)=>{}
          );
        }
           
/*
SEND REJECTION
*/
sendRejection(): void {
  if (this.rejectForm && this.rejectForm.invalid) {
      return;
  }
  // Disable the form
  if (this.rejectForm) {
    // Disable the form
    this.rejectForm.disable();
  }
  // this.approveForm.disable();

  // Hide the alert
  this.showAlert = false;
  if(this.rejectForm && this.rejectForm.value){
    this.rejectForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
    this.rejectForm.value['app_id'] = this.application_id;
    // this.rejectForm.value['reason'] = this.current_reason;

  // this.propertyHeirshipForm.value.user_property_code = this._activatedRoute.params['_value'].code;
    console.log(this.rejectForm.value);}
    /*
    if(this.pd.heirship_id>0){
        this.getHeirshipee(this.pd.heirship_id);
    }*/
    
    this._viewPropertyHeirshipActionService.rejectJointCommissioner(this.rejectForm.value)
        .subscribe((response) => {
            if (response.status != 200) {
                // Re-enable the form
                this.rejectForm.enable();
                // Reset the form
                this.rejectForm.reset();
                // Set the alert
                // this.heirshipee_response=response.response;
                this.alert = {
                    type: 'error',
                    message: response.response
                };
                // Show the alert
                this.showAlert = true;
            } else {
              this._router.navigateByUrl('/joint-commissioner/certificate-heirship-applications');

                // this.pd.heirship_id = response.heirship_application_id
                // this.getHeirshipee(this.pd.heirship_id);
                // // Re-enable the form
                // this.approveForm.enable();
                // // Reset the form
                // this.approveForm.reset();
                // this.heirshipee_response="Heirshipee details shaved successfuly.";
                // Navigate to the confirmation required page
                // this._router.navigateByUrl('/citizens/fees');
                //this._router.navigateByUrl('/citizens/heirship-applications-details/' +  this.propertyHeirshipForm.value['user_id']);
                //this._router.navigateByUrl('/citizens/fees/2');
              /// this._router.navigateByUrl('/citizens/heirship-application/fees/'+this.propertyHeirshipForm.value['user_property_code']+'/'+response.heirship_application_id);
            }
          },(response)=>{}
        );
      }
    
   
   
}
