import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyTransferActionService } from 'app/modules/dy-commissioner/property/application/transfer/certificate/details/action/action.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import{ ViewPropertyTransferActionModule } from 'app/modules/dy-commissioner/property/application/transfer/certificate/details/action/action.module'
@Component({
    selector       : 'ViewPropertyTransferAction',
    templateUrl    : './action.component.html',
    styleUrls  : ['./action.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyTransferActionComponent implements OnInit
{

    approveForm: FormGroup;
    rejectForm: FormGroup;
    application_id:number=0;
    selectedProject: string = 'RLab Crop. Backend App';
    radioOptions: { value: string, label: string }[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    @ViewChild('namedElement', {static: false}) namedElement: ElementRef;
   
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
      };
    showAlert: boolean = false;

    pta : any;
    dataSource: MatTableDataSource<ViewPropertyTransferActionModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['srno','purchaser_name','actions'];
    /**
     * Constructor
     */
    constructor(
        private _viewPropertyTransferActionService: ViewPropertyTransferActionService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService:MastersService,
        private _masterService1:MastersService,
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
           forward_to : ['', Validators.required],
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
                console.log(this.pta.transferee);
                this.dataSource.data = this.pta.transferee;
                this._masterService1.getUserByRole(this.pta.app_status)
                  .subscribe(() => {
                  if (this._masterService1.data$.source['_value'].status != 200) {
                      // Set the alert
                      console.log('===no ways===');
                  } else {                
                      this.radioOptions = this._masterService1.data$.source['_value'].data;       
                      this.namedElement.nativeElement.click();
                  }
                })
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

    
   // this.propertyTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
     console.log(this.approveForm.value);}
    /*
    if(this.pd.transfer_id>0){
        this.getTransferee(this.pd.transfer_id);
    }*/
   
    this._viewPropertyTransferActionService.approveDyCommissioner(this.approveForm.value)
        .subscribe((response) => {
            if (response.status != 200) {
                // Re-enable the form
                this.approveForm.enable();
                // Reset the form
                this.approveForm.reset();
                // Set the alert
                //this.transferee_response=response.response;
                this.alert = {
                    type: 'error',
                    message: response.response
                };
                // Show the alert
                this.showAlert = true;
            } else {
               this._router.navigateByUrl('/dy-commissioner/transfer-applications/certificate-pending');
                /*this.pd.transfer_id = response.transfer_application_id
                this.getTransferee(this.pd.transfer_id);
                // Re-enable the form
                this.approveForm.enable();
                // Reset the form
                this.approveForm.reset();
                this.transferee_response="Transferee details shaved successfuly.";*/
                // Navigate to the confirmation required page
                // this._router.navigateByUrl('/citizens/fees');
                //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.propertyTransferForm.value['user_id']);
                //this._router.navigateByUrl('/citizens/fees/2');
             /// this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
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

  // this.propertyTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
    console.log(this.rejectForm.value);}
    /*
    if(this.pd.transfer_id>0){
        this.getTransferee(this.pd.transfer_id);
    }*/
    
    this._viewPropertyTransferActionService.rejectDyCommissioner(this.rejectForm.value)
        .subscribe((response) => {
            if (response.status != 200) {
                // Re-enable the form
                this.rejectForm.enable();
                // Reset the form
                this.rejectForm.reset();
                // Set the alert
                // this.transferee_response=response.response;
                this.alert = {
                    type: 'error',
                    message: response.response
                };
                // Show the alert
                this.showAlert = true;
            } else {
              this._router.navigateByUrl('/dy-commissioner/certificate-transfer-applications');

                // this.pd.transfer_id = response.transfer_application_id
                // this.getTransferee(this.pd.transfer_id);
                // // Re-enable the form
                // this.approveForm.enable();
                // // Reset the form
                // this.approveForm.reset();
                // this.transferee_response="Transferee details shaved successfuly.";
                // Navigate to the confirmation required page
                // this._router.navigateByUrl('/citizens/fees');
                //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.propertyTransferForm.value['user_id']);
                //this._router.navigateByUrl('/citizens/fees/2');
              /// this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
            }
          },(response)=>{}
        );
      }
    
   
   
}
