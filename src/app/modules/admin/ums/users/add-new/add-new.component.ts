import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/ums/users/add-new/add-new.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector       : 'add-new',
    templateUrl    : './add-new.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy
{
    userForm: FormGroup;
    userRole=[];
    select_role:any;
    selectedProject: string = 'RLab Crop. Backend App';
    // listOfLocality: any = [
    //       {"name": "Village", "value": 1, "checked": false},
    //       {"name": "Sector", "value": 2, "checked": false}
    //     ];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _addnewService: AddNewService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<AddNewComponent>,
    )
    {
        this.userRole=[{'id':1,'name':'admin'}];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.userForm = this._formBuilder.group({
            role: ['', Validators.required],
            userId: ['', Validators.required],
            userName:['', Validators.required],
            address: ['', Validators.required],
            emailId : ['', Validators.required],
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
   
     saveAndClose(): void
    {
        // Save the message as a draft
        this.saveAsDraft();

        // Close the dialog
        this.matDialogRef.close();
    }
     discard(): void
    {
        this.matDialogRef.close();
    }

    /**
     * Save the message as a draft
     */
    saveAsDraft(): void
    {

    }
    
    /**
     * Send the message
     */
     send(): void
     {
 
     }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
