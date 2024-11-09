import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewDraftService } from 'app/modules/admin/transfer-application/draft/view/view.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector       : 'view',
    templateUrl    : './view.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewDraftComponent implements OnInit, OnDestroy
{
    draftForm: FormGroup;
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
        private _viewdraftService: ViewDraftService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        public matDialogRef: MatDialogRef<ViewDraftComponent>,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

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
