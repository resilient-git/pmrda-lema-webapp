import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ListService } from 'app/modules/admin/masters/society-name/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DeleteComponent} from 'app/modules/admin/masters/society-name/delete/delete.component';
import {EditComponent} from 'app/modules/admin/masters/society-name/edit/edit.component';
import {ViewComponent} from 'app/modules/admin/masters/society-name/view/view.component';
import { AddNewComponent } from 'app/modules/admin/masters/society-name/add-new/add-new.component';
import { MasterSocietyListModule } from "./list.module";
import { FuseAlertType } from "@fuse/components/alert";
import { FuseConfirmationService } from "@fuse/services/confirmation";




@Component({
    selector       : 'list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy
{
  
  societyForm: FormGroup;
  displayedColumns: string[] =['taluka_name','taluka_code',
  'village_code','village_name','gpsc_number',
  'scheme_number','name','actions'];

  Society: MasterSocietyListModule[] = [];
 
  dataSource: MatTableDataSource<MasterSocietyListModule> = new MatTableDataSource([]);
  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  }; 

  showAlert: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MasterSocietyListModule>;
 
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    url = [];
    dialogRef:any;

    /**
     * Constructor
     */
    constructor(
        private _listService: ListService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _matDialog: MatDialog,
        private _fuseConfirmationService: FuseConfirmationService,
        // public matDialogRef: MatDialogRef<ListComponent>
        
    )
    {
     
    }
    
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    /**
     * On init
     */
     ngOnInit(): void
     {
      this._listService.getData()
      .subscribe(() => {
        if (this._listService.data$.source['_value'].status != 200) {
          // Set the alert
          this.alert = {
            type: 'error',
            message: this._listService.data$.source['_value'].response
          };

          // Show the alert
          this.showAlert = true;
        } else {
          this.dataSource.data = this._listService.data$.source['_value'].data;
        }
        // console.log(this._listService.data$.source['_value'].data);
      })

    //   this.societyForm = this._formBuilder.group({
    //     srNo: ['', Validators.required],
    //     taluka:['', Validators.required],
    //     sector: ['', Validators.required],
    //     societyName : ['', Validators.required],
    // })
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
    
    
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */ 
    
     openComposeDialogDelete(code): void {

      const confirmation = this._fuseConfirmationService.open({
        title: 'Delete task',
        message: 'Are you sure you want to delete this task? This action cannot be undone!',
        actions: {
          confirm: {
            label: 'Delete'
          }
        }
      });
  
      // Subscribe to the confirmation dialog closed action
      confirmation.afterClosed().subscribe((result) => {
  
        // If the confirm button pressed...
        if (result === 'confirmed') {
          let user_id = JSON.parse(localStorage.getItem('currentUser')).id;
  
          // Sign up
          this._listService.deleteSociety({ code, user_id })
            .subscribe((response) => {
              if (response.status != 200) {
                // Set the alert
                this.alert = {
                  type: 'error',
                  message: response.response
                };
  
                // Show the alert
                this.showAlert = true;
              } else {
                this.alert = {
                  type: 'info',
                  message: response.response
                };
  
                // Show the alert
                this.showAlert = true;
                var dsData = this.dataSource.data;
                const itemIndex = dsData.findIndex(obj => obj[code] === code);
                this.dataSource.data.splice(itemIndex, 1);
                this.dataSource.paginator = this.paginator;
              }
            },
              (response) => { }
  
            );
        }
      })
    }
  
     openComposeDialogView(): void
     {
        
         const dialogRef = this._matDialog.open(ViewComponent);
 
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }
}
/** Builds and returns a new User. */

;
