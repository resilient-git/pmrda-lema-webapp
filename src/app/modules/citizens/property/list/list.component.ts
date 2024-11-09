import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ListService } from 'app/modules/citizens/property/list/list.service';
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
import { CitizensListPropertiesModule } from "./list.module";
import { FuseConfirmationService } from "@fuse/services/confirmation";


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {


  displayedColumns: string[] = ['society','sadnika_number','owner_name', 'owner_mobile', 'uprn', 'actions'];


  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  showAlert: boolean = false;
  propertyData: any;

  dataSource: MatTableDataSource<CitizensListPropertiesModule> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CitizensListPropertiesModule>;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  url = [];
  dialogRef: any;

  /**
   * Constructor
   */
  constructor(
    private _listService: ListService,
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
    this.propertyData = [];

    const code = JSON.parse(localStorage.getItem('currentUser')).id;
    this._listService.getPropertyDetails(code)
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

  newApplication(code): void {
    this._router.navigateByUrl('/citizens/add-transfer-application/' + code );
                 
  }

  openComposeDialogView(code): void {
    // Open the dialog
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = { code: code }
    dialogConfig.maxHeight = '70vh';

    const dialogRef = this._matDialog.open(ViewPropertyComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe((result) => {
        console.log('Compose dialog was closed!');
      });
  }






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
        console.log("hii");

        this._listService.deleteProperty({ code, user_id })
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
                type: 'success',
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

  // getCode() {
  //   return this._activatedRoute.params['_value'].code;
  // }


}
