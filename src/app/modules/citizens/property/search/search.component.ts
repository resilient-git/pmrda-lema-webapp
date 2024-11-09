import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchPropertyService } from 'app/modules/citizens/property/search/search.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
    selector       : 'searchproperty',
    templateUrl    : './search.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPropertyComponent implements OnInit, OnDestroy
{
    horizontalStepperForm: FormGroup;
    ownerForm: FormGroup;

    talukaData: any;
    villageData: any;
    gpscData: any;
    schemesData: any;
    schemeStructureData: any;
    societyData:any;
    buildingData:any;
    sadnikaData:any;
    ownerData:any;
    propertyData : any;
    pd:any = {};
    showLoader:boolean=false;

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
        private _searchPropertyService: SearchPropertyService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService: MastersService,
        private _activatedRoute: ActivatedRoute,
       
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
        if(2 !== (JSON.parse(localStorage.getItem('currentUser')).role_id)){this._router.navigateByUrl('/restricted-access');}
        // Horizontal stepper form
        
        this.horizontalStepperForm = this._formBuilder.group({
            property_code :['', Validators.required]
        });

        this.ownerForm = this._formBuilder.group({
            owner_name:['', Validators.required],
            owner_mobile:['', Validators.required]
        });
    }

    getPropertyDetails(): void {
        let code = this.horizontalStepperForm.get('property_code')?.value;
        this.showLoader= true;
        this.pd = {};
        this._masterService.getPropertyDataByUPRN(code)
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
                    this.showLoader = false;
                    this.pd = this._masterService.data$.source['_value'].data;
                }
            })
    }


    getOwnerList(code):void{
        this.ownerData =[];
        this._masterService.getPropertyOwnerDataBySadnika(code)
        .subscribe(() =>{
        if(this._masterService.data$.source['value'].status !=200){
            this.alert ={
                type:'error',
                message:this._masterService.data$.source['_value'].response
            };
            this.showAlert=true;
        }else{
            console.log(this.horizontalStepperForm);

            this.horizontalStepperForm.controls.owner_name.setValue(this._masterService.data$.source['_value'].data.owner_name);
            this.horizontalStepperForm.controls.owner_mobile.setValue(this._masterService.data$.source['_value'].data.owner_mobile);
            //this.horizontalStepperForm.value['owner_mobile'] = this._masterService.data$.source['_value'].data.owner_mobile
        
            this.horizontalStepperForm.controls.property_code.setValue(this._masterService.data$.source['_value'].data.property_code);
        //    console.log(this._masterService);  
            this.horizontalStepperForm.controls.owner_id.setValue(this._masterService.data$.source['_value'].data.code);
            // console.log(this.horizontalStepperForm.value);    
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
    send(): void
    {
      console.log(this.ownerForm);
      
       if (this.ownerForm.invalid) {
           return;
       }

       // Disable the form
       this.ownerForm.disable();

       // Hide the alert
       this.showAlert = false;

       this.ownerForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;

       this.ownerForm.value['sadnika_code'] = this.pd.sadnika_code;
       this.ownerForm.value['property_code'] = this.pd.code;

       // Sign up
       this._searchPropertyService.postData(this.ownerForm.value)
           .subscribe((response) => {
            console.log(response);
            
               if (response.status != 200) {
                   // Re-enable the form
                   this.ownerForm.enable();

                   // Reset the form
                   this.ownerForm.reset();

                   // Set the alert
                   this.alert = {
                       type: 'error',
                       message: response.response
                   };

                   // Show the alert
                   this.showAlert = true;
               } else {
                   // Navigate to the confirmation required page
                   console.log(response);  
                   this._router.navigateByUrl('/citizens/get-otp?owner_mobile=' + this.ownerForm.value['owner_mobile']+"&user_property_id="+response.user_property_id);
                   
               }
           },
               (response) => { }

           );
    }

   
}
