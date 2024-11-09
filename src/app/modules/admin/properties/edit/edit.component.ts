import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditPropertyService } from 'app/modules/admin/properties/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';
import { DateAdapter } from '@angular/material/core';


@Component({
    selector       : 'edit',
    templateUrl    : './edit.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditPropertyComponent implements OnInit, OnDestroy
{
    propertiesForm: FormGroup;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    selectedProject: string = 'RLab Crop. Backend App';
   
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    selected: Date | null;

    /**
     * Constructor
     */
    constructor(
        private _editpropertyService: EditPropertyService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _dateAdapter : DateAdapter<Date>,
        private _activatedRoute: ActivatedRoute
    )
    {
        // this._dateAdapter.setLocale('en-GB'); 
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.propertiesForm = this._formBuilder.group({
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
            sadnika_number: [],
            sadnika_code:[],
            building_code:[],
            building_number:[],
            property_area : ['',Validators.required],
            special_land_acquition_officer_number : ['',Validators.required],
            award_number : ['',Validators.required],
            award_date:['',Validators.required],
            award_land_possession_date : ['',Validators.required],
            leasedeed_registration_number_haveli_number :['',Validators.required],
            leasedeed_registration_date : ['',Validators.required],
            original_plot_holder : ['',Validators.required],
            shop_premium: ['',Validators.required],
            ready_reckoner_square_meter_rate :['',Validators.required],
            building_permission_number : ['',Validators.required],
            building_permission_date : ['',Validators.required],
            completion_certificate_number : ['',Validators.required],
            completion_date :['',Validators.required],
        })
        console.log(this.propertiesForm);
        const code = this._activatedRoute.params['_value'].code;
        this._editpropertyService.getProperties(code)
            .subscribe(() => {
                if (this._editpropertyService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._editpropertyService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.propertiesForm.setValue(this._editpropertyService.data$.source['_value'].data);
                    // this.propertiesForm.value['completion_date'] = this.formatDate(this._editpropertyService.data$.source['_value'].data.completion_date);
                }
            })
                 
        
    }


    formatDate(date) {
        let d = new Date(date);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return (`${mo}/${da}/${ye}`);
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
        // // Save the message as a draft
        // this.saveAsDraft();

        // // Close the dialog
        // this.matDialogRef.close();
    }
     discard(): void
    {
        // this.matDialogRef.close();
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
     send(): void {
        if (this.propertiesForm.invalid) {
            return;
        }

        // Disable the form
        this.propertiesForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.propertiesForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.propertiesForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.villageForm.value);

        // Sign up
        this._editpropertyService.postData(this.propertiesForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.propertiesForm.enable();

                    // Reset the form
                    this.propertiesForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/properties/list');
                }
            },
                (response) => { }

            );
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
