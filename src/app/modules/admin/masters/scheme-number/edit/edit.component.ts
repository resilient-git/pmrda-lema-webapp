import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'app/modules/admin/masters/scheme-number/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector: 'edit',
    templateUrl: './edit.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy {
    schemeForm: FormGroup;
    talukaData: any;
    villageData: any;
    gpscData: any;

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
        private _editService: EditService,
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
        this.schemeForm = this._formBuilder.group({
            taluka_code: ['', Validators.required],
            village_code: ['', Validators.required],
            gpsc_number: ['', Validators.required],
            scheme_number: ['', Validators.required],
            taluka_name_mr: [],
            taluka_name_en: [],
            village_name_en: [],
            village_name_mr: [],
            gpsc_code: [], code: []
        })

        const code = this._activatedRoute.params['_value'].code;
        this._editService.getSchemes(code)
            .subscribe(() => {
                if (this._editService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._editService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.schemeForm.setValue(this._editService.data$.source['_value'].data);
                    console.log(this.schemeForm);

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



    /**
     * Save the message as a draft
     */
    saveAsDraft(): void {

    }

    /**
     * Send the message
     */
    send(): void {
        if (this.schemeForm.invalid) {
            return;
        }

        // Disable the form
        this.schemeForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.schemeForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.schemeForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.villageForm.value);

        // Sign up
        this._editService.postData(this.schemeForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.schemeForm.enable();

                    // Reset the form
                    this.schemeForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/schemes/list');
                }
            },
                (response) => { }

            );
    }
}
