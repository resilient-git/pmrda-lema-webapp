import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/masters/society-name/add-new/add-new.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MastersService } from '../../masters.service';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector       : 'add-new',
    templateUrl    : './add-new.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy
{
    societyForm: FormGroup;
    societyData : any;
    villageData : any;
    talukaData :any;
    bulklandData:any;
    schemeData :any;
    gatData : any;
    getSchemeStructureData:any;
    
    schemeStructureData : any;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
   
    // listOfLocality: any = [
    //       {"name": "Village", "value": 1, "checked": false},
    //       {"name": "Sector", "value": 2, "checked": false}
    //     ];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _addnewService: AddNewService,
        private _mastersService: MastersService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        
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
        this._mastersService.getTalukaData()
        .subscribe(() => {
            if (this._mastersService.data$.source['_value'].status != 200) {
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._mastersService.data$.source['_value'].response
                };

                // Show the alert
                this.showAlert = true;
            } else {
                this.talukaData = this._mastersService.data$.source['_value'].data;
            }
        })

        this.societyForm = this._formBuilder.group({
            
            taluka: ['', Validators.required],
            village: ['', Validators.required],
            gpsc_number:['', Validators.required],
            scheme_number:['', Validators.required],
            scheme_structure_code:['', Validators.required],
            // societyName:['', Validators.required],
            name_en:['', Validators.required],
            name_mr:['', Validators.required],
        })
                 
        
    }

    updateVillage(taluka):void{
        //    console.log(this.villageData);
        this.villageData = [];
            console.log(taluka.value);
            this._mastersService.getVillageData(taluka.value)
                .subscribe(() => {
                    if (this._mastersService.data$.source['_value'].status != 200) {
                        // Set the alert
                        this.alert = {
                            type: 'error',
                            message: this._mastersService.data$.source['_value'].response
                        };
        
                        // Show the alert
                        this.showAlert = true;
                    } else {
                        this.villageData = this._mastersService.data$.source['_value'].data;
                    }
                })
                
        
            
        }

        updateGatNumber(village):void{
            //    console.log(this.villageData);
            this.gatData = [];
                console.log(village.value);
                this._mastersService.getGPSCData(village.value)
                    .subscribe(() => {
                        if (this._mastersService.data$.source['_value'].status != 200) {
                            // Set the alert
                            this.alert = {
                                type: 'error',
                                message: this._mastersService.data$.source['_value'].response
                            };
            
                            // Show the alert
                            this.showAlert = true;
                        } else {
                            this.bulklandData = this._mastersService.data$.source['_value'].data;
                        }
                    })        
            }

           
            updateScheme(gatnumber):void{
              //    console.log(this.villageData);
              this.schemeData = [];
                  console.log(gatnumber.value);
                  this._mastersService.getSchemesData(gatnumber.value)
                      .subscribe(() => {
                          if (this._mastersService.data$.source['_value'].status != 200) {
                              // Set the alert
                              this.alert = {
                                  type: 'error',
                                  message: this._mastersService.data$.source['_value'].response
                              };
              
                              // Show the alert
                              this.showAlert = true;
                          } else {
                              this.schemeData = this._mastersService.data$.source['_value'].data;
                          }
                      })        
              }


              updateSchemeStructure(code):void{
                //    console.log(this.villageData);
                this.schemeStructureData = [];
                    console.log(code.value);
                    this._mastersService.getSchemesStructureData(code.value)
                        .subscribe(() => {
                            if (this._mastersService.data$.source['_value'].status != 200) {
                                // Set the alert
                                this.alert = {
                                    type: 'error',
                                    message: this._mastersService.data$.source['_value'].response
                                };
                
                                // Show the alert
                                this.showAlert = true;
                            } else {
                                this.schemeStructureData = this._mastersService.data$.source['_value'].data;
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
        if (this.societyForm.invalid) {
            return;
        }

        // Disable the form
        this.societyForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.societyForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
         console.log(this.societyForm.value);

        // Sign up
        this._addnewService.postData(this.societyForm.value)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.societyForm.enable();

                    // Reset the form
                    this.societyForm.reset();

                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };

                    // Show the alert
                    this.showAlert = true;
                } else {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/admin/societies/list');
                }
            },
                (response) => { }

            );
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
