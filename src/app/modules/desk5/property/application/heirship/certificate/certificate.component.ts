import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation,ChangeDetectorRef,  HostBinding, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { CertificateService } from 'app/modules/desk5/property/application/heirship/certificate/certificate.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { EditPropertyComponent } from "app/modules/admin/properties/edit/edit.component";
import { ViewPropertyComponent } from "app/modules/admin/property-owner/view/view.component";
import { DeleteComponent } from "app/modules/admin/properties/delete/delete.component";
import { MatAccordion } from "@angular/material/expansion";
//import { MastersService } from "../../masters/masters.service";
import { FuseAlertType } from "@fuse/components/alert";
import { Desk5CertificateHeirshipModule } from "./certificate.module";
import { FuseConfirmationService } from "@fuse/services/confirmation";

import { cloneDeep } from 'lodash-es';
import { MastersService } from "app/modules/admin/masters/masters.service";

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateComponent implements OnInit, OnDestroy {

  approveForm: FormGroup;
  rejectForm: FormGroup;
  // approveForm: FormGroup;
  displayedColumns: string[] = ['uprn','owner_details', 'created_at',
  'status_text'];
  approve_response:string='';
  reject_response:string='';
  
  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  showAlert: boolean = false;
  heirshipeeData: any;

  dataSource: MatTableDataSource<Desk5CertificateHeirshipModule> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Desk5CertificateHeirshipModule>;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  url = [];
  dialogRef: any;

  showApprove:boolean=false;
  showReject:boolean=false;
  pd: any;
  current_app_id:number=0;
  current_reason:string='';

  /**
   * Constructor
   */
  constructor(
    // private _masterService:MastersService,
    private __certificateService:CertificateService,
    private _certificateService: CertificateService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
  //  private _masterService: MastersService,
    private _fuseConfirmationService: FuseConfirmationService,
    private _activatedRoute: ActivatedRoute
  ) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * On init
   */
  ngOnInit(): void {
   // this.heirshipeeData = [];
   let user = cloneDeep(JSON.parse(localStorage.getItem('currentUser')));
    //const code = this._activatedRoute.params['_value'].code;
    const code = user.id;

    this.approveForm = this._formBuilder.group({
      schedule_time : ['', Validators.required],
      created_by:[],
      created_at:[] 
    });

  this.rejectForm = this._formBuilder.group({
    reason : ['', Validators.required],
    created_by:[],
    created_at:[]
  });

    this._certificateService.getCertificateDesk5()
      .subscribe(() => {
        if (this._certificateService.data$.source['_value'].status != 200) {
          // Set the alert
          this.alert = {
            type: 'error',
            message: this._certificateService.data$.source['_value'].response
          };

          // Show the alert
          this.showAlert = true;
        } else {
          this.dataSource.data = this._certificateService.data$.source['_value'].data;
          console.log(this.dataSource);
           // no more applications
          if (this.dataSource.data.length === 0) {
            console.log('No more applications in the list');
          }
        }
      })
  }

  /**
  * On destroy
  */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   * 
   * 
   */

  backToUser(code): void {
    // // Open the dialog
     const dialogConfig = new MatDialogConfig();

     dialogConfig.data = { code: code }
     dialogConfig.maxHeight = '70vh';

     const dialogRef = this._matDialog.open(ViewPropertyComponent, dialogConfig);

     dialogRef.afterClosed()
       .subscribe((result) => {
         console.log('Compose dialog was closed!');
       });
  }

//   getHeirshipee(pta_id):void{
//     this._masterService.getHeirshipeeData(pta_id)
//     .subscribe(() => {
//         if (this._masterService.data$.source['_value'].status != 200) {
//            // this.heirshipeeData = this._masterService.data$.source['_value'].response;
//             // Set the alert
//             this.alert = {
//                 type: 'error',
//                 message: this._masterService.data$.source['_value'].response
//             };

//             // Show the alert
//             this.showAlert = true;
//         } else {
//             //this.td = this._masterService.data$.source['_value'].data;
//             //console.log(this.td);
            
           
//             this.dataSource.data = this._masterService.data$.source['_value'].data;
//            // console.log(this.heirshipeeData);
            
//         }
//     })
// }

  /*
  SEND APPROVAL
  */
  sendApproval(): void {
    this.approve_response='';
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
    this.approveForm.value['app_id'] = this.current_app_id;

    
   // this.propertyHeirshipForm.value.user_property_code = this._activatedRoute.params['_value'].code;
     console.log(this.approveForm.value);}
    /*
    if(this.pd.heirship_id>0){
        this.getHeirshipee(this.pd.heirship_id);
    }*/
   
    this.__certificateService.approveDesk5(this.approveForm.value)
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
               this._router.navigateByUrl('/desk5/certificate-heirship-applications');
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
  this.reject_response='';
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
    this.rejectForm.value['app_id'] = this.current_app_id;
    // this.rejectForm.value['reason'] = this.current_reason;

  // this.propertyHeirshipForm.value.user_property_code = this._activatedRoute.params['_value'].code;
    console.log(this.rejectForm.value);}
    /*
    if(this.pd.heirship_id>0){
        this.getHeirshipee(this.pd.heirship_id);
    }*/
    
    this.__certificateService.rejectDesk5(this.rejectForm.value)
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
              this._router.navigateByUrl('/desk5/certificate-heirship-applications');

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
    /*
    approve
    */  
    approve(code): void {

      const confirmation = this._fuseConfirmationService.open({
        title: 'Approve Application',
        message: 'Are you sure you want to appove this application?',
        actions: {
          confirm: {
            label: 'Approve'
          }
        }
      });

    // // Subscribe to the confirmation dialog closed action
      confirmation.afterClosed().subscribe((result) => {
        

    //   // If the confirm button pressed...
    //   if (result === 'confirmed') {
    //     let user_id = JSON.parse(localStorage.getItem('currentUser')).id;

    //     // Sign up
    //     console.log("hii");

    //     this._certificateService.deleteProperty({ code, user_id })
    //       .subscribe((response) => {
    //         if (response.status != 200) {
    //           // Set the alert
    //           this.alert = {
    //             type: 'error',
    //             message: response.response
    //           };

    //           // Show the alert
    //           this.showAlert = true;
    //         } else {
    //           this.alert = {
    //             type: 'success',
    //             message: response.response
    //           };

    //           // Show the alert
    //           this.showAlert = true;
    //           var dsData = this.dataSource.data;
    //           const itemIndex = dsData.findIndex(obj => obj[code] === code);
    //           this.dataSource.data.splice(itemIndex, 1);
    //           this.dataSource.paginator = this.paginator;
    //         }
    //       },
    //         (response) => { }

    //       );
    //   }
      })

  }


  reject(code): void {

     const confirmation = this._fuseConfirmationService.open({
       title: 'Reject Application',
       message: 'Are you sure you want to reject this application?',
       actions: {
         confirm: {
           label: 'Reject'
         }
       }
     });

    // // Subscribe to the confirmation dialog closed action
     confirmation.afterClosed().subscribe((result) => {

    //   // If the confirm button pressed...
    //   if (result === 'confirmed') {
    //     let user_id = JSON.parse(localStorage.getItem('currentUser')).id;

    //     // Sign up
    //     console.log("hii");

    //     this._certificateService.deleteProperty({ code, user_id })
    //       .subscribe((response) => {
    //         if (response.status != 200) {
    //           // Set the alert
    //           this.alert = {
    //             type: 'error',
    //             message: response.response
    //           };

    //           // Show the alert
    //           this.showAlert = true;
    //         } else {
    //           this.alert = {
    //             type: 'success',
    //             message: response.response
    //           };

    //           // Show the alert
    //           this.showAlert = true;
    //           var dsData = this.dataSource.data;
    //           const itemIndex = dsData.findIndex(obj => obj[code] === code);
    //           this.dataSource.data.splice(itemIndex, 1);
    //           this.dataSource.paginator = this.paginator;
    //         }
    //       },
    //         (response) => { }

    //       );
    //   }
     })

  }

  // getCode() {
  //   return this._activatedRoute.params['_value'].code;
  // }


}
// function sendRejection(): null {
//   throw new Error("Function not implemented.");
// }

