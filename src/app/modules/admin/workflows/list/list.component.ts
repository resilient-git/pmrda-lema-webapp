import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { TalukasListService } from 'app/modules/admin/masters/talukas/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AddNewComponent } from 'app/modules/admin/masters/talukas/add-new/add-new.component';
import { ViewComponent } from 'app/modules/admin/workflows/view/view.component';
import { EditComponent } from 'app/modules/admin/masters/talukas/edit/edit.component';
import {DeleteComponent} from 'app/modules/admin/workflows/delete/delete.component';

@Component({
    selector       : 'list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkFlowsListComponent implements OnInit, OnDestroy
{

  displayedColumns: string[] = ['srNo','workflowName','actions'];
  // dataSource = ELEMENT_DATA;

  // dataSource1: MatTableDataSource<User>;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Village>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Village>;
 
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    workflowForm: FormGroup;

    url = [];
    dialogRef:any;

    /**
     * Constructor
     */
    constructor(
        private _listService: TalukasListService,
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

      this.workflowForm = this._formBuilder.group({
        srNo: ['', Validators.required],
        workflowName:['', Validators.required],
        
        
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
    
     openComposeDialogDelete(): void
     {
         
         const dialogRef = this._matDialog.open(DeleteComponent);
        
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }
    
     openComposeDialogView(): void
     {
         // Open the dialog
         const dialogRef = this._matDialog.open(ViewComponent);
 
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }

     
}
/** Builds and returns a new User. */

export interface Village {
  
  srNo: number;
  workflowName: string;
 
}
const ELEMENT_DATA: Village[] = [
  {srNo: 1, workflowName: 'Property Transfer'},
  {srNo: 2, workflowName: 'Property Nomination'},
  {srNo: 3, workflowName: 'Loan NOC'},
  
 
  
  
];
