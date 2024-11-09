import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewPropertyService } from 'app/modules/admin/properties/view/view.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';
import { EditPropertyService } from '../edit/edit.service';


@Component({
    selector       : 'view',
    templateUrl    : './view.component.html',
    styles:['.tbl{width:100%;}.tbl th, .tbl td{padding:10px; border:1px solid #ddd;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPropertyComponent implements OnInit, OnDestroy
{
    propertiesForm: FormGroup;
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
        private _editpropertyService: EditPropertyService,
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
            sadnika_code:[],
            sadnika_number: [],
             building_code:[],
            building_number:[],
            property_area : [],
            special_land_acquition_officer_number : [],
            award_number : [],
            award_date:[],
            award_land_possession_date : [],
            leasedeed_registration_number_haveli_number :[],
            leasedeed_registration_date : [],
            original_plot_holder : [],
            shop_premium: [],
            ready_reckoner_square_meter_rate :[],
            building_permission_number : [],
            building_permission_date : [],
            completion_certificate_number : [],
            completion_date :[],
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
