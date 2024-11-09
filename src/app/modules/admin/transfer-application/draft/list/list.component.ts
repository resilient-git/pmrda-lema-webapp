import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ListService } from 'app/modules/admin/transfer-application/draft/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ViewDraftComponent } from 'app/modules/admin/transfer-application/draft/view/view.component';
import { DeleteComponent } from 'app/modules/admin/transfer-application/draft/delete/delete.component';


@Component({
    selector       : 'list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy
{
  
  displayedColumns: string[] = ['applicationStarDate', 'propertyOwner', 'taluka', 'sector','grahyonana','building','sadnika','actions'];
  // dataSource = ELEMENT_DATA;

  // dataSource1: MatTableDataSource<User>;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Draft>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Draft>;
 
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    draftForm: FormGroup;

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
      
      this.draftForm = this._formBuilder.group({
        applicationStarDate: ['', Validators.required],
        propertyOwner:['', Validators.required],
        taluka: ['', Validators.required],
        sector : ['', Validators.required],
        grahyonana : ['', Validators.required],
        building : ['', Validators.required],
        sadnika : ['', Validators.required],
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
    
    
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */ 
     openComposeDialogView(): void
     {
         // Open the dialog
         const dialogRef = this._matDialog.open(ViewDraftComponent);
 
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }
     openComposeDialogDelete(): void
     {
         // Open the dialog
         const dialogRef = this._matDialog.open(DeleteComponent);
          //this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }
}
/** Builds and returns a new User. */

export interface Draft {
 
       applicationStarDate: string;
       propertyOwner: string;
       taluka: string;
       sector: string;
       grahyonana: string;
       building: string;
       sadnika: string;
  
  // action: string 
}
const ELEMENT_DATA: Draft[] = [
  {applicationStarDate: '3-10-2022', propertyOwner: 'Yash', taluka: 'Pachwad', sector: 'First',grahyonana:'ASD',building:'Sai sadan',sadnika:'ASS'},
  {applicationStarDate: '8-10-2022', propertyOwner: 'Deep', taluka: 'Satara', sector: 'Second',grahyonana:'ASD',building:'Deep sadan',sadnika:'Deep'},
  {applicationStarDate: '12-10-2022', propertyOwner: 'Jay', taluka: 'Man', sector: 'Third',grahyonana:'ASD',building:'Sai sadan',sadnika:'Sai'},
  {applicationStarDate: '15-10-2022', propertyOwner: 'Preet', taluka: 'Patan', sector: 'Fourth',grahyonana:'ASD',building:'Harsh sadan',sadnika:'Harsh'},
  {applicationStarDate: '19-10-2022', propertyOwner: 'Sai', taluka: 'Satara', sector: 'fifth',grahyonana:'ASD',building:'Veer sadan',sadnika:'Veer'},
  
  
];
