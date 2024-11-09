import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, empty } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectPropertyService } from 'app/modules/citizens/property/application/transfer/select/select.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';

@Component({
    selector       : 'newproperty',
    templateUrl    : './select.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectPropertyComponent implements OnInit, OnDestroy
{
    horizontalStepperForm: FormGroup;

    talukaData: any;
    villageData: any;
    gpscData: any;
    schemesData: any;
    schemeStructureData: any;
    societyData:any;
    buildingData:any;
    sadnikaData:any;
    ownerData:any;
    isPropertyOK:boolean=true;
    isPA:boolean=false;
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
        private _newPropertyService: SelectPropertyService,
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
           
            taluka_code: ['', Validators.required],
            village_code: ['', Validators.required],
            //gpsc_code: ['', Validators.required],
            gpsc_code: [''],
            scheme_number: ['', Validators.required],
            society_code: ['', Validators.required],
            building_code: ['', Validators.required],
            scheme_structure_code:['', Validators.required],
            sadnika_code:['', Validators.required],
            // properties :['', Validators.required],
            owner_name_en :['', Validators.required],
            owner_name_mr :['', Validators.required],
            owner_mobile: ['', [Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
            owner_pancard :['', Validators.required],
            owner_aadhar :['', Validators.required],
            owner_age :['', Validators.required],
            owner_email :['', Validators.required],
            owner_address :['', Validators.required],
            app_vid_pa :['', Validators.required],
            property_code :[],
            owner_id :[],
            //power of attorny information
            pa_name_en :[''],
            pa_name_mr :[''],
            pa_pancard :[''],
            pa_aadhar :[''],
            pa_age :[''],
            pa_mobile: [''],
            pa_email :[''],
            pa_address: [''],
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

    showPAfields() {
        this.isPA = true;
      }
      hidePAfields() {
        this.isPA = false;
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
    
    getSchemesListByVillage(code): void {
        this.schemesData = [];
        this._masterService.getSchemesDataByVillage(code)
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
        console.log(this.horizontalStepperForm.value.scheme_number);
        
        this._masterService.getSocietyData(code, this.horizontalStepperForm.value['scheme_number'])
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

    getBuildingList(code):void{
        this.buildingData = [];
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

  
    getSadnikaList(code):void{
       this.sadnikaData =[];
       this._masterService.getSadnikasData(code)
       .subscribe(() =>{
            if(this._masterService.data$.source['value'].status !=200){
                this.alert ={
                    type:'error',
                    message:this._masterService.data$.source['_value'].response
                };
                this.showAlert=true;
            }else{
                this.sadnikaData = this._masterService.data$.source['_value'].data;
            }

        })
    }

getOwnerList(code):void{
    this.ownerData =[];
    this._masterService.checkProperty(code)
    .subscribe(() =>{
        if(this._masterService.data$.source['value'].status !=200){
            this.isPropertyOK=false;
            return false;
        }else{
            if(this._masterService.data$.source['_value'].property_status == '1'){
                this._masterService.getPropertyOwnerDataBySadnika(code)
                    .subscribe(() =>{
                    if(this._masterService.data$.source['value'].status !=200){
                        this.alert ={
                            type:'error',
                            message:this._masterService.data$.source['_value'].response
                        };
                        this.showAlert=true;
                        this.isPropertyOK=false;
                    }else{
                        console.log(this.horizontalStepperForm);
                        if(this._masterService.data$.source['_value'].data.owner_name){
                            this.isPropertyOK=true;
                        }else{
                            this.isPropertyOK=false;
                        }
                        this.horizontalStepperForm.controls.owner_name_mr.setValue(this._masterService.data$.source['_value'].data.owner_name);
                        this.horizontalStepperForm.controls.owner_mobile.setValue(this._masterService.data$.source['_value'].data.owner_mobile);
                        //this.horizontalStepperForm.value['owner_mobile'] = this._masterService.data$.source['_value'].data.owner_mobile
                    
                        this.horizontalStepperForm.controls.property_code.setValue(this._masterService.data$.source['_value'].data.property_code);
                    //    console.log(this._masterService);  
                        this.horizontalStepperForm.controls.owner_id.setValue(this._masterService.data$.source['_value'].data.code);
                        // console.log(this.horizontalStepperForm.value);    
                    }
                })
                //this.isPropertyOK=true;
                //return false;
            }else{
                this.isPropertyOK=false;
            } 

        }      
    });

   
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
      console.log(this.horizontalStepperForm);
      
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
            console.log(response);
            
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
                   //console.log(response);  
                   let sender = this.horizontalStepperForm.value['owner_mobile'];
                   if(this.horizontalStepperForm.value['app_vid_pa'] == 2){
                        sender = this.horizontalStepperForm.value['pa_mobile'];
                   }
                   this._router.navigateByUrl('/citizens/transfer-application/verify-mobile?owner_mobile=' + sender +"&user_property_id="+response.user_property_id);
                   
               }
           },
               (response) => { }

           );
    }

   
}
