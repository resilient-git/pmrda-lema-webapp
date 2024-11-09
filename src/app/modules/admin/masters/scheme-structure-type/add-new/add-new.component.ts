import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/masters/scheme-structure-type/add-new/add-new.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MastersService } from '../../masters.service';
import { TypeOfStructureListService } from '../../type-of-structure/list/list.service';


@Component({
    selector       : 'add-new',
    templateUrl    : './add-new.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy
{
    SSForm: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    talukaData :any;
    villageData : any;
    gpscData : any;
    schemesData : any;
    structureData: any;
    
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;

    constructor(
        private _addnewService: AddNewService,
        private _masterService: MastersService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _typeOfStructureListService : TypeOfStructureListService
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
        this.SSForm = this._formBuilder.group({
            taluka_code:['', Validators.required],
            village_code:['', Validators.required],
            gpsc_code:['', Validators.required],
            scheme_code:['', Validators.required],
           structure_type:['', Validators.required]
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

        // this.schemesData = [];
        // this._masterService.getSchemesData(1)
        // .subscribe(() => {
        //     if (this._masterService.data$.source['_value'].status != 200) {
        //         // Set the alert
        //         this.alert = {
        //             type: 'error',
        //             message: this._masterService.data$.source['_value'].response
        //         };

        //         // Show the alert
        //         this.showAlert = true;
        //     } else {
        //         this.schemesData = this._masterService.data$.source['_value'].data;
        //     }
        // }) 

        // this.structureData = [];
        // this._typeOfStructureListService.getData()
        // .subscribe(() => {
        //     if (this._typeOfStructureListService.data$.source['_value'].status != 200) {
        //         // Set the alert
        //         this.alert = {
        //             type: 'error',
        //             message: this._typeOfStructureListService.data$.source['_value'].response
        //         };

        //         // Show the alert
        //         this.showAlert = true;
        //     } else {
        //         this.structureData = this._typeOfStructureListService.data$.source['_value'].data;
        //     }
        // }) 
        // // this.getSchemesList;
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

    getGPSCList(code): void {
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

    getStructureList(code){
        this.structureData = [];
        this._typeOfStructureListService.getData()
        .subscribe(() => {
            if (this._typeOfStructureListService.data$.source['_value'].status != 200) {
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._typeOfStructureListService.data$.source['_value'].response
                };

                // Show the alert
                this.showAlert = true;
            } else {
                this.structureData = this._typeOfStructureListService.data$.source['_value'].data;
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
        console.log(this.SSForm.value);
        if (this.SSForm.invalid) {
            return;
        }

        // Disable the form
        this.SSForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.SSForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;

        // Sign up
        this._addnewService.postData(this.SSForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.SSForm.enable();

                    // Reset the form
                    this.SSForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/scheme-structure-type/list');
                }
            },
                (response) => { }

            );
     }
   
}
