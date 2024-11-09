import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyService } from 'app/modules/admin/property-owner/view/view.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';
import { EditPropertyOwnerService } from '../edit/edit.service';


@Component({
    selector       : 'view',
    templateUrl    : './view.component.html',
    styles:['.tbl{width:100%;}.tbl th, .tbl td{padding:10px; border:1px solid #ddd;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyComponent implements OnInit, OnDestroy
{
    propertyOwnerForm: FormGroup;
    propertyData:any;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _viewpropertyService: ViewPropertyService,
        private _editpropertyOwnerService: EditPropertyOwnerService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _formBuilder: FormBuilder,
         public matDialogRef: MatDialogRef<ViewPropertyComponent>,
         @Inject(MAT_DIALOG_DATA) public data: any
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
        console.log(this.data.code);

        this.propertyOwnerForm = this._formBuilder.group({
        
            parent_owner_id: [],
            property_code: [],
            transfer_date:  [],
            transfer_deed_registration_number_haveli_number:  [],
            type_of_transfer:  [],
            owner_name:  [],
            owner_mobile:  [],
            premium_of_flat:  [],
            transfer_fee:  [],
            ready_reackoner_rate_per_square_meter: [],
             remarks:  [],
             court_cases:  [],
         })

        const code = this.data.code;
        
        this._viewpropertyService.getProperties(code)
            .subscribe(() => {
                if (this._viewpropertyService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._viewpropertyService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.propertyData = this._viewpropertyService.data$.source['_value'].data;
                    // console.log(this.propertyData);
                }
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
