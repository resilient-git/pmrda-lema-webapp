import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/property-owner/add-new/add-new.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MastersService } from '../../masters/masters.service';
import { EditPropertyService } from '../../properties/edit/edit.service';

@Component({
    selector: 'add-new',
    templateUrl: './add-new.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy {
    propertyOwnerForm: FormGroup;
    propertyOwnerData: string = "";
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    isData$ = new BehaviorSubject([]);

    selected: Date | null;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _addNewService: AddNewService,
        private _editpropertyService: EditPropertyService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService: MastersService,
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
        // this.bSubject.next(['aaaaaaaaaaaa'])
        const code = this._activatedRoute.params['_value'].code;

        this._masterService.getPropertyOwnerData(code)
            .subscribe((response) => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.isData$.next(this._masterService.data$.source['_value'].data);
                    // this.getOwnerDetails();
                    // console.log(this.propertyOwnerData);
                }
            })
        this.propertyOwnerForm = this._formBuilder.group({
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

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    send(): void {
        if (this.propertyOwnerForm.invalid) {
            return;
        }

        // Disable the form
        this.propertyOwnerForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.propertyOwnerForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.propertyOwnerForm.value.parent_owner_id = 0;
        this.propertyOwnerForm.value.property_code = this._activatedRoute.params['_value'].code;
        // console.log(this.propertyOwnerForm.value);


        this._addNewService.postData(this.propertyOwnerForm.value)
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
                    this._router.navigateByUrl('/admin/property-owner/list/' + this.propertyOwnerForm.value['property_code']);
                }
            },
                (response) => { }
            );
    }
    getCode() {
        return this._activatedRoute.params['_value'].code;
    }

    getOwnerDetails() {
        this.isData$.subscribe(result => {
            this.propertyOwnerData = result['owner_name']+' ('+result['owner_mobile']+')';
        });
    }

}
