import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'app/modules/admin/masters/sadnika-dukan-number/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector       : 'edit',
    templateUrl    : './edit.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy
{
    sadnikaForm: FormGroup;
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

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.sadnikaForm = this._formBuilder.group({
            taluka_name_en: [],
            taluka_code: [],
            taluka_name_mr: [],
            village_code: [],
            village_name_en: [],
            village_name_mr: [],
            gpsc_number: [],
            gpsc_code: [],
            scheme_number: [],
            scheme_code: [],
            structure_code: [],
            structure_type_name_mr: [],
            structure_type_name_en: [],
            society_code:[],
            society_name_en: [],
            society_name_mr: [],
            code: [],
            sadnika_number: ['', Validators.required],
            building_code:[],
            building_number:[]
        })
                 
        const code = this._activatedRoute.params['_value'].code;
        this._editService.getSadnikasNumber(code)
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
                    this.sadnikaForm.setValue(this._editService.data$.source['_value'].data);
                    console.log(this.sadnikaForm);
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
   
    

    /**
     * Save the message as a draft
     */
    saveAsDraft(): void
    {

    }
    
    /**
     * Send the message
     */
     send(): void {
        if (this.sadnikaForm.invalid) {
            return;
        }

        // Disable the form
        this.sadnikaForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.sadnikaForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.sadnikaForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.villageForm.value);

        // Sign up
        this._editService.postData(this.sadnikaForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.sadnikaForm.enable();

                    // Reset the form
                    this.sadnikaForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/sadnikas/list');
                }
            },
                (response) => { }

            );
    }

}
