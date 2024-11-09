import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ListService } from 'app/modules/admin/transfer-application/back-to-applicant/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";




@Component({
    selector       : 'list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy
{

  displayedColumns: string[] = ['userId', 'userName', 'address', 'emailId','actions'];
  // dataSource = ELEMENT_DATA;

  // dataSource1: MatTableDataSource<User>;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
 
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    listForm: FormGroup;

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

    //   this.userForm = this._formBuilder.group({
    //     userId: ['', Validators.required],
    //     userName:['', Validators.required],
    //     address: ['', Validators.required],
    //     emailId : ['', Validators.required],
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
}
/** Builds and returns a new User. */

export interface User {
  userId: number;
  userName: string;
  address: string;
  emailId: string;
  // action: string 
}
const ELEMENT_DATA: User[] = [
  {userId: 1, userName: 'Yash', address: 'Satara', emailId: 'yash@gmail.com'},
  {userId: 2, userName: 'Deep', address: 'Pune', emailId: 'deep@gmail.com'},
  {userId: 3, userName: 'Jay', address:'Sangali', emailId: 'jay@gmail.com'},
  {userId: 4, userName: 'Siya', address: 'Kolhapur', emailId: 'siya@gmail.com'},
  {userId: 5, userName: 'Priya', address: 'Thane', emailId: 'priya@gmail.com'},
  {userId: 6, userName: 'Harsh', address: 'Pune', emailId: 'harsh@gmail.com'},
  {userId: 7, userName: 'Preet', address: 'Satara', emailId: 'preet@gmail.com'},
  {userId: 8, userName: 'Kriti', address: 'Solapur', emailId: 'kriti@gmail.com'},
  
];
