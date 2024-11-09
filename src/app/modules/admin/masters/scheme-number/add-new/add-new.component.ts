import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/masters/scheme-number/add-new/add-new.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseAlertType } from '@fuse/components/alert';
import { MastersService } from '../../masters.service';


@Component({
    selector       : 'add-new',
    templateUrl    : './add-new.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy
{
    schemeForm: FormGroup;
    talukaData: any;
    villageData: any;
    gpscData : any;

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
        this.schemeForm = this._formBuilder.group({
            taluka_code: ['', Validators.required],
            village_code: ['', Validators.required],
            gpsc_code: ['', Validators.required],
            scheme_number: ['', Validators.required],
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

    getVillageList(code): void
    {
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
    

    getBulklandList(code):void{
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
     send(): void
     {
        if (this.schemeForm.invalid) {
            return;
        }

        // Disable the form
        this.schemeForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.schemeForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        // console.log(this.schemeForm.value);

        // Sign up
        this._addnewService.postData(this.schemeForm.value)
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
