import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPropertyTransferDetailsService } from 'app/modules/citizens/property/application/transfer/add-new/add-new.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import{ CitizensPropertyNewTransferModule } from 'app/modules/citizens/property/application/transfer/add-new/add-new.module'
@Component({
    selector       : 'NewPropertyTransfer',
    templateUrl    : './add-new.component.html',
    styleUrls  : ['./add-new.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPropertyTransferDetailsComponent implements OnInit
{
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
    files: any[] = [];
    propertyTransferForm: FormGroup;
    transfereeForm: FormGroup;

    user_property_code:number=0;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;
    url = [];
    @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
    myfilename = 'Select File';
    profile_pic= [];
    transferee_response:string='';
    is_pa=false;
    documentData:any={
                    "lezy_aadhar_card":"",
                    'lezy_pan_card':"",
                    'lezy_photo':"",
                    'lezy_poa':"",
                    'transferee_aadhar_card':"",
                    'transferee_pan_card':"",
                    'transferee_photo':"",
                    'lease_agreement':"",
                    'guarantee_letter':"",
                    'allotment_certificate':"",
                    'transfer_letter':"",
                    'mou_document':"",
                    'society_noc':"",
                    'loan_noc':"",
                    'bank_noc':"",
                    'death_certificate':"",
                    'medical_certificate':"",
                    'married_women_affidavit':""
                };

    isData$ = new BehaviorSubject([]);


    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    pd : any;
    dataSource: MatTableDataSource<CitizensPropertyNewTransferModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['id','first_name','middle_name','last_name','email','mobile'];
    /**
     * Constructor
     */
    constructor(
        private _newPropertyTransferDetailsService: NewPropertyTransferDetailsService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _masterService:MastersService,
        private _activatedRoute: ActivatedRoute,
        private dialogRef : MatDialog,
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
        this._activatedRoute.params.subscribe(params => {
            //console.log(params) //log the entire params object
            this.user_property_code=params['code'];
          });

          
        
          this.transfereeForm = this._formBuilder.group({
            first_name: ['', Validators.required],
            middle_name: [''],
            last_name: ['', Validators.required],
            first_name_mr: ['', Validators.required],
            middle_name_mr: [''],
            last_name_mr: ['', Validators.required],
            mobile: ['', Validators.required],
            email: ['', Validators.required],
            aadhar: ['', Validators.required],
            pancard: ['', Validators.required],
            age : ['', Validators.required],
            birth_place : [''],
            married_status : ['', Validators.required],  
            gender : ['', Validators.required],
            current_address : ['', Validators.required],
            permanent_address : ['', Validators.required],
            job_title : ['', Validators.required],
            company_details : [''],
            transferee_aadhar_card  : ['', Validators.required],
            transferee_pan_card  : ['', Validators.required],
            transferee_photo  : ['', Validators.required],
            created_by:[],
            created_at:[]
           
        });

        this.propertyTransferForm = this._formBuilder.group({
            user_property_code: [this.user_property_code, Validators.required],
            lezy_aadhar_card  : ['', Validators.required],
            lezy_pan_card  : ['', Validators.required],
            lezy_photo  : ['', Validators.required],
            lezy_poa  : [''],
            lease_agreement : ['', Validators.required],
            guarantee_letter : ['', Validators.required],
            allotment_certificate : ['', Validators.required],
            transfer_letter : ['', Validators.required],
            mou_document : ['', Validators.required],
            society_noc : ['', Validators.required],
            loan_noc : ['', Validators.required],
            bank_noc : ['', Validators.required],
            created_by:[],
            created_at:[]
        });

        this._masterService.getUserPropertyData(this.user_property_code)
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
                this.pd = this._masterService.data$.source['_value'].data;
                if(this.pd.is_pa == 2){
                    this.is_pa=true;
                }else{
                    this.is_pa=false;
                }
                if(this.pd.transfer_id>0){
                    this.getTransferee(this.pd.transfer_id);
                }
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


    getTransferee(pta_id):void{
        this._masterService.getTransfereeData(pta_id)
        .subscribe(() => {
            if (this._masterService.data$.source['_value'].status != 200) {
               // this.transfereeData = this._masterService.data$.source['_value'].response;
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._masterService.data$.source['_value'].response
                };

                // Show the alert
                this.showAlert = true;
            } else {
                //this.td = this._masterService.data$.source['_value'].data;
                //console.log(this.td);
                
               
                this.dataSource.data = this._masterService.data$.source['_value'].data;
               // console.log(this.transfereeData);
                
            }
        })
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    onSelect(event,fileFor) {
        // let fileType = event.target.files[0].type;
        // if (fileType.match(/image\/*/)) {
        //   let reader = new FileReader();
        //   reader.readAsDataURL(event.target.files[0]);
        //   reader.onload = (event: any) => {
        //     this.url = event.target.result;
        //   };
        // }
        if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
              reader.onload = (event: any) => {
                //console.log(event.target.result);
                //this.profile_pic = event.target.result;
                this.documentData[fileFor] = btoa(event.target.result);
                
                /*
                setTimeout (() => {
                    console.log("Hello from setTimeout");
                    let element:HTMLElement = document.getElementById('auto_trigger') as HTMLElement;

                    //this.myDiv.nativeElement.click();
                    //let el: HTMLElement = this.myDiv.nativeElement;
                    element.click();
                 }, 1000);*/
                
              };
              //this.profile_pic=this.url;
              //console.log(this.url);              
            }

       
    }

    /**
     * Upload avatar
     *
     * @param fileList
     */
    uploadAvatar(fileList: FileList): void
    {
       // Return if canceled
       if ( !fileList.length )
       {
           return;
       }
 
       const allowedTypes = ['image/jpeg', 'image/png'];
       const file = fileList[0];
 
       // Return if the file is not allowed
       if ( !allowedTypes.includes(file.type) )
       {
           return;
       }
    }
    

    validateMobile(){
        if((this.transfereeForm.value.mobile < 6000000000 ) || (this.transfereeForm.value.mobile > 10000000000 )){
            alert("Please enter valid Mobile Number");
            this.transfereeForm.value.mobile = '';//event.focus();
            return false;
         }
         return true;
    }
    
    validateEmail(){
        if(!this.isValidEmail(this.transfereeForm.value.email)){
            alert("Please enter valid Email Address");
            this.transfereeForm.value.email = '';//event.focus();
            return false;
        }
        return true;
    }

    validateAadhar(){
        if(!this.isValidAadhaarNumber(this.transfereeForm.value.aadhar)){
            alert("Please enter valid Aadhar Number");
            this.transfereeForm.value.aadhar = '';//event.focus();
            return false;
         }
         return true;
    }

    validatePan(){
        if(!this.isValidPanCardNo(this.transfereeForm.value.pancard)){
            alert("Please enter valid PAN Number");
            this.transfereeForm.value.pancard = '';//event.focus();
            return false;
        }
        return true;
    }

    validateAge(){
        if((this.transfereeForm.value.age < 20 ) || (this.transfereeForm.value.age > 100 )){
            alert("Please enter valid Age");
            this.transfereeForm.value.age = '';//event.focus();
            return false;
         }
         return true;
    }
     /**
      * Returns whether the given dates are different days
      *
      * @param current
      * @param compare
      */
    isSameDay(current: string, compare: string): boolean
    {
         return moment(current, moment.ISO_8601).isSame(moment(compare, moment.ISO_8601), 'day');
    }
     
 
     /**
      * Get the relative format of the given date
      *
      * @param date
      */
    getRelativeFormat(date: string): string
    {
         const today = moment().startOf('day');
         const yesterday = moment().subtract(1, 'day').startOf('day');
 
         // Is today?
         if ( moment(date, moment.ISO_8601).isSame(today, 'day') )
         {
             return 'Today';
         }
 
         // Is yesterday?
         if ( moment(date, moment.ISO_8601).isSame(yesterday, 'day') )
         {
             return 'Yesterday';
         }
 
         return moment(date, moment.ISO_8601).fromNow();
    }
 
     /**
      * Track by function for ngFor loops
      *
      * @param index
      * @param item
      */
     trackByFn(index: number, item: any): any
     {
         return item.id || index;
     }
 
     onAdd(e: Event) {
         e.preventDefault();
         e.stopImmediatePropagation();
     }
     
     keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    isValidEmail(email)
    {
        let regex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
    
        if (email == null) {
            return false;
        }
        if (regex.test(email) == true) {
            return true;
        }
        else {
            return false;
        }
    }

    isValidAadhaarNumber(aadhaar_number)
    {
    
        // Regex to check valid
        // aadhaar_number 
        let regex = new RegExp(/^[2-9]{1}[0-9]{11}$/);
    
        // if aadhaar_number
        // is empty return false
        if (aadhaar_number == null) {
            return false;
        }
    
        // Return true if the aadhaar_number
        // matched the ReGex
        if (regex.test(aadhaar_number) == true) {
            return true;
        }
        else {
            return false;
        }
    }

    isValidPanCardNo(panCardNo) {
        panCardNo =panCardNo.toUpperCase();
        let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
     
        if (panCardNo == null) {
            console.log('i m out 1');
            return false;
        }
        if (regex.test(panCardNo) == true) {
            console.log('i m in');
            return true;
        }
       
        console.log('i m out 2'+panCardNo);
        return false;
    }
    
   

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    submit(): void{
        //console.log("########### 12345 ###############");
         //console.log(this.propertyTransferForm.value);
        
        if (this.propertyTransferForm.invalid) {
            return;
        }

        // Disable the form
        this.propertyTransferForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.propertyTransferForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
     
       // this.propertyTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
        
         
        this._newPropertyTransferDetailsService.submitApplication(this.propertyTransferForm.value,this.documentData,this.pd.transfer_id)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.propertyTransferForm.enable();
                    // Reset the form
                    this.propertyTransferForm.reset();
                    // Set the alert
                    this.transferee_response=response.response;
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    //this.pd.transfer_id = response.transfer_application_id
                    //this.getTransferee(this.pd.transfer_id);
                    // Re-enable the form
                    this.propertyTransferForm.enable();
                    // Reset the form
                    this.propertyTransferForm.reset();
                    this.transferee_response="Transferee details shaved successfuly.";
                    // Navigate to the confirmation required page
                    // this._router.navigateByUrl('/citizens/fees');
                    //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.propertyTransferForm.value['user_id']);
                    //this._router.navigateByUrl('/citizens/fees/2');
                    this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.pd.transfer_id);

                }
            },
                (response) => { }
            );
        //this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
        
    }
    send(): void {
        if(!this.validateMobile()){ return;}
        if(!this.validateEmail()){ return;}
        if(!this.validateAadhar()){ return;}
        if(!this.validatePan()){ return;}
        if(!this.validateAge()){ return;}

        this.transferee_response='';
        if (this.transfereeForm.invalid) {
            return;
        }

        // Disable the form
        //this.transfereeForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.transfereeForm.value['user_property_code']  = this.user_property_code;
        this.transfereeForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;

       // this.propertyTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
         console.log(this.transfereeForm.value);
        /*
        if(this.pd.transfer_id>0){
            this.getTransferee(this.pd.transfer_id);
        }*/
        this._newPropertyTransferDetailsService.postData(this.transfereeForm.value,this.documentData,this.pd.transfer_id)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Reset the form
                    //this.transfereeForm.reset();

                    // Re-enable the form
                    this.transfereeForm.enable();
                    
                    //this.transfereeForm.value['user_property_code']  = this.user_property_code;
                    // Set the alert
                    this.transferee_response=response.response;
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.pd.transfer_id = response.transfer_application_id
                    this.getTransferee(this.pd.transfer_id);
                    //console.log("ressssssssssss"+this.transfereeForm.value['user_property_code']);
                    // Reset the form
                    this.transfereeForm.reset();
                    // Re-enable the form
                    this.transfereeForm.enable();
                    
                    this.transfereeForm.value['user_property_code']  = this.user_property_code;
                    this.transfereeForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;

                    //console.log("enaaaaaaaaaaaa"+this.transfereeForm.value['user_property_code']);
                    
                    this.transferee_response="Transferee details saved successfuly.";
                    // Navigate to the confirmation required page
                    // this._router.navigateByUrl('/citizens/fees');
                    //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.propertyTransferForm.value['user_id']);
                    //this._router.navigateByUrl('/citizens/fees/2');
                   /// this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
                }
            },
                (response) => { }
            );
    }

    getUser() {
       // return this._activatedRoute.params['_value'].code;
      return JSON.parse(localStorage.getItem('currentUser')).id;
    }

    /**
    * on file drop handler
    */
    onFileDropped($event) {
        this.prepareFilesList($event);
    }

    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
        this.prepareFilesList(files);
    }

    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index: number) {
        if (this.files[index].progress < 100) {
            console.log("Upload in progress.");
            return;
        }
        this.files.splice(index, 1);
    }

    /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index: number) {
        setTimeout(() => {
            if (index === this.files.length) {
            return;
            } else {
            const progressInterval = setInterval(() => {
                if (this.files[index].progress === 100) {
                clearInterval(progressInterval);
                this.uploadFilesSimulator(index + 1);
                } else {
                this.files[index].progress += 5;
                }
            }, 200);
            }
        }, 1000);
    }

    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    prepareFilesList(files: Array<any>) {
        for (const item of files) {
            item.progress = 0;
            this.files.push(item);
        }
        this.fileDropEl.nativeElement.value = "";
        this.uploadFilesSimulator(0);
    }

    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
            return "0 Bytes";
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
   
}