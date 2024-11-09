import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { RoleListService } from 'app/modules/admin/ums/roles/list/list.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { AddNewComponent } from "app/modules/admin/ums/roles/add-new/add-new.component";
import { DeleteComponent } from "app/modules/admin/ums/roles/delete/delete.component";
import { EditComponent } from "app/modules/admin/ums/roles/edit/edit.component";
import { ViewComponent } from "app/modules/admin/ums/roles/view/view.component";



@Component({
    selector       : 'list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleListComponent implements OnInit, OnDestroy
{
   
  displayedColumns: string[] = ['roleId', 'roleName', 'roleActivity','roleOwner','numberOfUsers','actions'];

  dataSource = new MatTableDataSource<Role>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Role>;
 
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    roleForm: FormGroup;

    url = [];
    dialogRef:any;
    /**
     * Constructor
     */
    constructor(
        private _listService: RoleListService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _matDialog: MatDialog,
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
        this.roleForm = this._formBuilder.group({
            roleId: ['', Validators.required],
            roleName:['', Validators.required],
            roleActivity: ['', Validators.required], 
            roleOwner: ['', Validators.required], 
            numberOfUsers: ['', Validators.required],  
            
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
     openComposeDialog(): void
     {
        
         const dialogRef = this._matDialog.open(AddNewComponent);
 
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }
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
         
         const dialogRef = this._matDialog.open(ViewComponent);
 
         dialogRef.afterClosed()
                  .subscribe((result) => {
                      console.log('Compose dialog was closed!');
                  });
     }

    //  openComposeDialogEdit(): void
    //  {
        
    //      const dialogRef = this._matDialog.open(EditComponent);
 
    //      dialogRef.afterClosed()
    //               .subscribe((result) => {
    //                   console.log('Compose dialog was closed!');
    //               });
    //  }

     addRole() {
      const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
      // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
      this.table.renderRows();
    }
  
}

export interface Role {
  roleId: number;
  roleName: string;
  roleActivity:string;
  roleOwner : string;
  numberOfUsers: number;

  
}
const ELEMENT_DATA: Role[] = [
  {roleId: 1, roleName: 'User 1',roleActivity:'Maker',roleOwner:'Clerk', numberOfUsers: 5},
  {roleId: 2, roleName: 'User 2',roleActivity:'Checker',roleOwner:'Supervisor', numberOfUsers: 6},
  {roleId: 3, roleName: 'User 3',roleActivity:'Recommended/Approval',roleOwner:'Dy Collector', numberOfUsers:7},
  {roleId: 4, roleName: 'User 4',roleActivity:'Final Authority',roleOwner:'  Additional Collector / Joint', numberOfUsers: 8},
  {roleId: 5, roleName: 'User 5',roleActivity:'Higher Authority',roleOwner:' Commissioner', numberOfUsers:9},
  
];
