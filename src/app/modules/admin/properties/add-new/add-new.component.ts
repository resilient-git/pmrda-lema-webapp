import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPropertyService } from 'app/modules/admin/properties/add-new/add-new.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MastersService } from '../../masters/masters.service';
import { DateAdapter } from '@angular/material/core';
import { ListService } from '../list/list.service';
import { EditService } from '../../masters/bulkland-number/edit/edit.service';

@Component({
    selector: 'newproperty',
    templateUrl: './add-new.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPropertyComponent implements OnInit, OnDestroy {
    horizontalStepperForm: FormGroup;
    talukaData: any;
    villageData: any;
    gpscData: any;
    schemesData: any;
    schemeStructureData: any;
    societyData: any;
    buildingData: any;
    sadnikaData: any;
    propertyData: any = null;
    propertyData$ = new BehaviorSubject<any>(this.propertyData);
    isSadnikaSelected: any;
    selectedGpsc: any;
    plotData = new BehaviorSubject<any>([]);

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    selected: Date | null;

    /**
     * Constructor
     */
    constructor(
        private _newPropertyService: NewPropertyService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService: MastersService,
        private _dateAdapter: DateAdapter<Date>,
        private _propertyList: ListService,
        private _editGPSCService: EditService
    ) {
        this._dateAdapter.setLocale('en-GB');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({

            taluka_code: ['', Validators.required],
            village_code: ['', Validators.required],
            gpsc_code: ['', Validators.required],
            scheme_code: ['', Validators.required],
            scheme_structure_code: ['', Validators.required],
            society_code: ['', Validators.required],
            building_code: ['', Validators.required],
            sadnika_code: ['', Validators.required],

            property_area: ['', Validators.required],
            special_land_acquition_officer_number: [],
            award_number: [],
            award_date: [],
            award_land_possession_date: [],
            leasedeed_registration_number_haveli_number: ['', Validators.required],
            leasedeed_registration_date: ['', Validators.required],
            original_plot_holder: ['', Validators.required],
            shop_premium: ['', Validators.required],
            ready_reckoner_square_meter_rate: ['', Validators.required],
            building_permission_number: ['', Validators.required],
            building_permission_date: ['', Validators.required],
            completion_certificate_number: ['', Validators.required],
            completion_date: ['', Validators.required],
        })

        //  console.log(this.horizontalStepperForm.value);
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
        this.gpscData = [];
        this.schemesData = [];
        this.schemeStructureData = [];
        this.societyData = [];
        this.buildingData = [];
        this.sadnikaData = [];
        this.propertyData$.next(null);

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


    getGPSCList(code): void {
        this.gpscData = [];
        this.schemesData = [];
        this.schemeStructureData = [];
        this.societyData = [];
        this.buildingData = [];
        this.sadnikaData = [];
        this.propertyData$.next(null);
        this._masterService.getAllGPSCData(code)
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
        this.schemeStructureData = [];
        this.societyData = [];
        this.buildingData = [];
        this.sadnikaData = [];
        this.plotData.next(null);
        this.propertyData$.next(null);
        this._editGPSCService.getBulkland(code)
            .subscribe(() => {
                if (this._editGPSCService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._editGPSCService.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    this._editGPSCService.data$.source['_value'].data['source_name'] = this._masterService.sourceData[this._editGPSCService.data$.source['_value'].data['source_code']];
                    this._editGPSCService.data$.source['_value'].data['aminity_name'] = this._masterService.amenityData[this._editGPSCService.data$.source['_value'].data['aminity_code']];
                    this.plotData.next(this._editGPSCService.data$.source['_value'].data);
                }
            })

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
        this.societyData = [];
        this.buildingData = [];
        this.sadnikaData = [];
        this.propertyData$.next(null);
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

    getSocietyList(code): void {
        this.societyData = [];
        this.buildingData = [];
        this.sadnikaData = [];
        this.propertyData$.next(null);
        console.log(this.horizontalStepperForm.value.scheme_code);

        this._masterService.getSocietyData(code, this.horizontalStepperForm.value['scheme_code'])
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

    getBuildingList(code): void {
        this.buildingData = [];
        this.sadnikaData = [];
        this.propertyData$.next(null);
        this._masterService.getBuildingData(code)
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
                    this.buildingData = this._masterService.data$.source['_value'].data;
                }
            })
    }


    getSadnikaList(code): void {
        this.sadnikaData = [];
        this.propertyData$.next(null);
        this._masterService.getSadnikasData(code)
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
                    this.sadnikaData = this._masterService.data$.source['_value'].data;
                }
            })
    }


    getProperty(code) {
        this.propertyData$.next(null);
        this._propertyList.getSearchData(this.horizontalStepperForm.value)
            .subscribe(() => {
                if (this._propertyList.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._propertyList.data$.source['_value'].response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {
                    console.log(this._propertyList.data$.source['_value'].data[0]['code']);
                    
                    this.propertyData$.next(this._propertyList.data$.source['_value'].data[0]['code']);
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
        // console.log(.getUTCFullYear()+"-"+d.getUTCMonth()+"-"+d.getUTCDay()+" "+d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds());
        //    this.horizontalStepperForm.value.award_date =  this._masterService.custDateFormat(this.horizontalStepperForm.value.award_date);
        //    console.log(this.horizontalStepperForm.value);
        //    this.horizontalStepperForm.value.award_land_possession_date=  this._masterService.custDateFormat(this.horizontalStepperForm.value.award_land_possession_date);
        //    console.log(this.horizontalStepperForm.value);
        //    this.horizontalStepperForm.value.leasedeed_registration_date =  this._masterService.custDateFormat(this.horizontalStepperForm.value.leasedeed_registration_date);
        //    console.log(this.horizontalStepperForm.value);
        //    this.horizontalStepperForm.value.building_permission_date =  this._masterService.custDateFormat(this.horizontalStepperForm.value.building_permission_date);
        //    console.log(this.horizontalStepperForm.value);
        //    this.horizontalStepperForm.value.completion_date =  this._masterService.custDateFormat(this.horizontalStepperForm.value.completion_date);
        //    console.log(this.horizontalStepperForm.value);


        if (this.horizontalStepperForm.invalid) {
            return;
        }

        // Disable the form
        this.horizontalStepperForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.horizontalStepperForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;


        // Sign up
        this._newPropertyService.postData(this.horizontalStepperForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.horizontalStepperForm.enable();

                    // Reset the form
                    this.horizontalStepperForm.reset();

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


}

