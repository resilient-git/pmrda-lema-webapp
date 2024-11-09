import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation,ChangeDetectorRef,  HostBinding, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { PendingService } from 'app/modules/tahsildar/property/application/transfer/pending/pending.service';
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
import { TahsildarPendingTransferModule } from "./pending.module";
import { FuseConfirmationService } from "@fuse/services/confirmation";

import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'pending',
  templateUrl: './pending.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingComponent implements OnInit, OnDestroy {


  displayedColumns: string[] = ['uprn','owner_details', 'created_at','desk_1_date','status_text'];


  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  showAlert: boolean = false;
  transfereeData: any;

  dataSource: MatTableDataSource<TahsildarPendingTransferModule> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TahsildarPendingTransferModule>;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  url = [];
  dialogRef: any;

  /**
   * Constructor
   */
  constructor(
    private _pendingService: PendingService,
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
   // this.transfereeData = [];
   let user = cloneDeep(JSON.parse(localStorage.getItem('currentUser')));
    //const code = this._activatedRoute.params['_value'].code;
    const code = user.id;
    this._pendingService.getPendingTahsildar()
      .subscribe(() => {
        if (this._pendingService.data$.source['_value'].status != 200) {
          // Set the alert
          this.alert = {
            type: 'error',
            message: this._pendingService.data$.source['_value'].response
          };

          // Show the alert
          this.showAlert = true;
        } else {
          this.dataSource.data = this._pendingService.data$.source['_value'].data;
          console.log(this.dataSource)
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

    //     this._pendingService.deleteProperty({ code, user_id })
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

    //     this._pendingService.deleteProperty({ code, user_id })
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
