import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TalukasListService } from 'app/modules/admin/masters/talukas/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ViewComponent } from 'app/modules/admin/masters/talukas/view/view.component';
import { FuseAlertType } from "@fuse/components/alert";
import { FuseConfirmationService } from "@fuse/services/confirmation";
import { MastersTalukasListModule } from "./list.module";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalukasListComponent implements OnInit, OnDestroy {
  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  showAlert: boolean = false;
  Talukas: MastersTalukasListModule[] = [];

  displayedColumns: string[] = ['code', 'name_mr', 'name_en', 'actions'];

  dataSource: MatTableDataSource<MastersTalukasListModule> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MastersTalukasListModule>;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  talukaForm: FormGroup;

  url = [];
  dialogRef: any;

  /**
   * Constructor
   */
  constructor(
    private _listService: TalukasListService,
    private _matDialog: MatDialog,
    private _fuseConfirmationService: FuseConfirmationService
  ) {

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
  ngOnInit(): void {
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
        this._listService.deleteTaluka({ code, user_id })
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



  openComposeDialogView(): void {
    // Open the dialog
    const dialogRef = this._matDialog.open(ViewComponent);

    dialogRef.afterClosed()
      .subscribe((result) => {
        console.log('Compose dialog was closed!');
      });
  }


}

