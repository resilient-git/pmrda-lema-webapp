import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'app/modules/admin/masters/bulkland-number/edit/edit.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector       : 'edit',
    templateUrl    : './edit.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit, OnDestroy
{
    bulklandForm: FormGroup;
    bulkLandData : any;
    talukaData : any;
    villageData : any;

    sourceData:any;
    amenityData:any;
    aminity_name:string;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    // selectedProject: string = 'RLab Crop. Backend App';
    // listOfLocality: any = [
    //       {"name": "Village", "value": 1, "checked": false},
    //       {"name": "Sector", "value": 2, "checked": false}
    //     ];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _editService: EditService,
        private _mastersService: MastersService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute
       
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
        this.bulklandForm = this._formBuilder.group({
            taluka_name_mr:[],
            taluka_name_en:[], taluka_code:[],village_code:[],
            village_name_mr:[],village_name_en:[],code:[],
            area_in_sq_m: [],
            source_code:[],
            other_source:[],
            special_land_acquition_officer_number: [],
            award_number: [],
            date_of_award:[],
            date_of_possession: [],
            is_developed:[],
            aminity_code:[],
            other_aminity:[],
            is_aminity_allocated:[],
            gpsc_number: ['', Validators.required],
        })
        const code = this._activatedRoute.params['_value'].code;
        this._editService.getBulkland(code)
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
                    console.log(this.bulklandForm);
                    this.bulklandForm.setValue(this._editService.data$.source['_value'].data);
                    this.bulklandForm.value['aminity_name']=this._mastersService.amenityData[this._editService.data$.source['_value'].data.aminity_code];
                    this.bulklandForm.value['source_name']=this._mastersService.sourceData[this._editService.data$.source['_value'].data.source_code];
                    console.log(this.bulklandForm);
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
   
    //  saveAndClose(): void
    // {
        
    //     this.saveAsDraft();

        
    //     this.matDialogRef.close();
    // }
    //  discard(): void
    // {
    //     this.matDialogRef.close();
    // }

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
        if (this.bulklandForm.invalid) {
            return;
        }

        // Disable the form
        this.bulklandForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.bulklandForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.bulklandForm.value['code'] = this._activatedRoute.params['_value'].code;;

        // console.log(this.villageForm.value);

        // Sign up
        this._editService.postData(this.bulklandForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.bulklandForm.enable();

                    // Reset the form
                    this.bulklandForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/gat-cts/list');
                }
            },
                (response) => { }

            );
    }



    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
