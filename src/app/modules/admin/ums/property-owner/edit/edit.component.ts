import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditPropertyOwnerService } from 'app/modules/admin/property-owner/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector: 'edit',
    templateUrl: './edit.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPropertyOwnerComponent implements OnInit, OnDestroy {
    propertyOwnerForm: FormGroup;
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
        private _editpropertyOwnerService: EditPropertyOwnerService,
        private _router: Router,
        private _formBuilder: FormBuilder,

        private _activatedRoute: ActivatedRoute
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.propertyOwnerForm = this._formBuilder.group({
            code:[],
            parent_owner_id:[],
            parent_owner_name:[],
            parent_owner_mobile:[],
            property_code: ['', Validators.required],
            transfer_date: ['', Validators.required],
            transfer_deed_registration_number_haveli_number: ['', Validators.required],
            type_of_transfer: ['', Validators.required],
            owner_name: ['', Validators.required],
            owner_mobile: ['', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
            premium_of_flat: ['', Validators.required],
            transfer_fee: ['', Validators.required],
            ready_reackoner_rate_per_square_meter: ['', Validators.required],
            remarks: ['', Validators.required],
            court_cases: ['', Validators.required],
        })


        //console.log(this.propertyOwnerForm);
        const code = this._activatedRoute.params['_value'].code;
        this._editpropertyOwnerService.getPropertyOwner(code)
            .subscribe(() => {
                if (this._editpropertyOwnerService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._editpropertyOwnerService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.propertyOwnerForm.setValue(this._editpropertyOwnerService.data$.source['_value'].data);
                    console.log(this.propertyOwnerForm);
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
     */

    saveAndClose(): void {
        // // Save the message as a draft
        // this.saveAsDraft();

        // // Close the dialog
        // this.matDialogRef.close();
    }
    discard(): void {
        // this.matDialogRef.close();
    }

    /**
     * Save the message as a draft
     */
    saveAsDraft(): void {

    }

    /**
     * Send the message
     */
    send(): void {
        if (this.propertyOwnerForm.invalid) {
            return;
        }

        // Disable the form
        this.propertyOwnerForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.propertyOwnerForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.propertyOwnerForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.villageForm.value);

        // Sign up
        this._editpropertyOwnerService.postData(this.propertyOwnerForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.propertyOwnerForm.enable();

                    // Reset the form
                    this.propertyOwnerForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/property-owner/list/' + this.getCode());
                }
            },
                (response) => { }

            );
    }

    getCode() {
        return this._activatedRoute.params['_value'].property_code;
    }


}
