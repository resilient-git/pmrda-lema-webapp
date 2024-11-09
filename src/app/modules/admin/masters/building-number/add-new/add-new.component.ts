import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/masters/building-number/add-new/add-new.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MastersService } from '../../masters.service';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector: 'add-new',
    templateUrl: './add-new.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy {
    buildingForm: FormGroup;
    talukaData: any;
    villageData: any;
    gpscData: any;
    schemesData: any;
    schemeStructureData: any;
    societyData:any;

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
        private _addnewService: AddNewService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService: MastersService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.buildingForm = this._formBuilder.group({
            taluka_code: ['', Validators.required],
            village_code: ['', Validators.required],
            gpsc_code: ['', Validators.required],
            scheme_number: ['', Validators.required],
            society_code: ['', Validators.required],
            building_number: ['', Validators.required],
            scheme_structure_code:['', Validators.required],
        })


        this._masterService.getTalukaData()
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.talukaData = this._masterService.data$.source['_value'].data;
                }
            })

    }

    getVillageList(code): void {
        this.villageData = [];
        this._masterService.getVillageData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.villageData = this._masterService.data$.source['_value'].data;
                }
            })

    }


    getBulklandList(code): void {
        this.gpscData = [];
        this._masterService.getGPSCData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.gpscData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getSchemesList(code): void {
        this.schemesData = [];
        this._masterService.getSchemesData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.schemesData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getSchemesStructureList(code): void {
        this.schemeStructureData = [];
        this._masterService.getSchemesStructureData(code)
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.schemeStructureData = this._masterService.data$.source['_value'].data;
                }
            })
    }

    getSocietyList(code):void{
        this.societyData = [];
        console.log(this.buildingForm.value.scheme_number);
        
        this._masterService.getSocietyData(code, this.buildingForm.value['scheme_number'])
            .subscribe(() => {
                if (this._masterService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._masterService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.societyData = this._masterService.data$.source['_value'].data;
                }
            })
    }

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
     send(): void
     {
        if (this.buildingForm.invalid) {
            return;
        }

        // Disable the form
        this.buildingForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.buildingForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        // console.log(this.schemeForm.value);

        // Sign up
        this._addnewService.postData(this.buildingForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.buildingForm.enable();

                    // Reset the form
                    this.buildingForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/buildings/list');
                }
            },
                (response) => { }

            );
     }
}
