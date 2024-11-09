import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { empty, Subject, Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddNewService } from 'app/modules/admin/masters/bulkland-number/add-new/add-new.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';


@Component({
    selector       : 'add-new',
    templateUrl    : './add-new.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent implements OnInit, OnDestroy
{
    bulklandForm: FormGroup;
    talukaData: any;
    villageData : any;
    selectedProject: string = 'RLab Crop. Backend App';
    statusFlag:any;
    source_code:any;
    developmentStatus:any;
    aminitiesVal:any;
    is_developed:any
    
    amenityData:object;
    sourceData:object;

    categoryData: any;
    purposeData: any;

    isSubCategory:boolean=false;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showValuetxtbox:any;
    showData:any;

    showAlert: boolean = false;

    selected: Date | null;

    subscription: Subscription;

    
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
        });
        /*
        this._mastersService.getLandMainCategoryData()
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
                console.log(this._mastersService.data$.source['_value'].data);
                this.categoryData = this._mastersService.data$.source['_value'].data;
            }
        });*/
        this._mastersService.getLandPurposeData()
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
                this.purposeData = this._mastersService.data$.source['_value'].data;
            }
        });

        this.bulklandForm = this._formBuilder.group({
            
            taluka_code:['', Validators.required],
            village_code: ['', Validators.required],
            gpsc_number: ['', Validators.required],
            area_in_sq_m: ['', Validators.required],
            land_category:[''],
            land_category_code:['', Validators.required],
            land_purpose_code:['', Validators.required],
            source_code:['', Validators.required],
            other_source:[''],
            special_land_acquition_officer_number: [''],
            award_number: [''],
            date_of_award:[''],
            date_of_possession: ['',Validators.required],
            is_developed:['',Validators.required],
            aminity_code:[''],
            other_aminity:[''],
            is_aminity_allocated:['']

        }) 
        this.amenityData=this._mastersService.amenityData;
        this.sourceData=this._mastersService.sourceData;

        // const source_code = <FormControl>this.bulklandForm.get('source_code');
        // const other_source = <FormControl>this.bulklandForm.get('other_source');
        // const special_land_acquition_officer_number = <FormControl>this.bulklandForm.get('special_land_acquition_officer_number');
        // const award_number = <FormControl>this.bulklandForm.get('award_number');
        // const date_of_award = <FormControl>this.bulklandForm.get('date_of_award');

        // const is_developed = <FormControl>this.bulklandForm.get('source_code');
        // const aminity_code = <FormControl>this.bulklandForm.get('aminity_code');
        // const other_aminity = <FormControl>this.bulklandForm.get('other_aminity');
        
        // this.subscription = source_code.valueChanges.subscribe(value => {
        //     if (value == 99) {
        //         other_source.setValidators([Validators.required, ])
        //     }
        //     else {
        //         other_source.setValidators(null);
        //     }
      
        //     other_source.updateValueAndValidity();
        //   });

        //   this.subscription = source_code.valueChanges.subscribe(value => {
        //     if (value ==5) {
        //         special_land_acquition_officer_number.setValidators([Validators.required, ])
        //     }
        //     else {
        //         special_land_acquition_officer_number.setValidators(null);
        //     }
      
        //     special_land_acquition_officer_number.updateValueAndValidity();
        //   });

        //   this.subscription = source_code.valueChanges.subscribe(value => {
        //     if (value ==5) {
        //         award_number.setValidators([Validators.required, ])
        //     }
        //     else {
        //         award_number.setValidators(null);
        //     }
      
        //     award_number.updateValueAndValidity();
        //   });

        //   this.subscription = source_code.valueChanges.subscribe(value => {
        //     if (value ==5) {
        //         date_of_award.setValidators([Validators.required, ])
        //     }
        //     else {
        //         date_of_award.setValidators(null);
        //     }
      
        //     date_of_award.updateValueAndValidity();
        //   });

        //   this.subscription = is_developed.valueChanges.subscribe(value => {
        //     if (value==0) {
        //         aminity_code.setValidators([Validators.required, ])
        //     }
        //     else {
        //         aminity_code.setValidators(null);
        //     }
      
        //     aminity_code.updateValueAndValidity();
        //   });

        //   this.subscription = is_developed.valueChanges.subscribe(value => {
        //     if (value==0) {
        //         other_aminity.setValidators([Validators.required, ])
        //     }
        //     else {
        //         other_aminity.setValidators(null);
        //     }
      
        //     other_aminity.updateValueAndValidity();
        //   });
}

updateLandCategory(cat):void{
    let land_category = <FormControl>this.bulklandForm.get('land_category');
    console.log();
    if(land_category.value == 2){
        this.isSubCategory = false;
    }else{
        this.isSubCategory = true;
        this.categoryData = [];
        this._mastersService.getLandSubCategoryData(land_category.value)
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
                    this.categoryData = this._mastersService.data$.source['_value'].data;
                }
            });
    }


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
    
    /**
     * On destroy
     */
    
     ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

        if (this.subscription) {
            this.subscription.unsubscribe();
          }
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
        console.log(this.bulklandForm);
        
        if (this.bulklandForm.invalid) {
            return;
        }

        // Disable the form
        this.bulklandForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.bulklandForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
         console.log(this.bulklandForm.value);

        // Sign up
        this._addnewService.postData(this.bulklandForm.value)
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
    otherSource(event) {
       console.log(event.value);
        
        const selectedValue = event.value;
        if (selectedValue === '6') {
            this.showValuetxtbox = true;
        } else {
            this.showValuetxtbox = false;
        }
      }
}
