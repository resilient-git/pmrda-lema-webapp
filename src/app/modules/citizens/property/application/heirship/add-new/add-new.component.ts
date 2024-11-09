import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewHeirshipTransferDetailsService } from 'app/modules/citizens/property/application/heirship/add-new/add-new.service';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import{ CitizensHeirshipNewTransferModule } from './add-new.module'

@Component({
    selector       : 'NewHeirshipTransfer',
    templateUrl    : './add-new.component.html',
    styleUrls  : ['./add-new.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewHeirshipTransferDetailsComponent implements OnInit
{
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
    files: any[] = [];
    
    heirshipTransferForm: FormGroup;
    heirshipForm: FormGroup;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;
    url = [];
    @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
    myfilename = 'Select File';
    profile_pic= [];
    heir_response:string='';
    documentData:any={
                    
                    'heir_aadhar_card':"",
                    'heir_pan_card':"",
                    'heir_photo':"",
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
                    'married_women_affidavit':"",
                    "heir_documents":"",
                    "heir_withdrawal_documents":""
                };

    isData$ = new BehaviorSubject([]);


    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
    showApplicantBox: boolean = false;

    showUploadBox: boolean = false;
    showAddNewHeirButton: boolean = true;
    showRemoveHeirBox: boolean = false;

    c_number_add_nominy:number = 0;
    c_number_remove_nominy:number = 0;

    removeHireArray:number[]=[];
    pd : any;
    user_property_code : Number =0;
    dataSource: MatTableDataSource<CitizensHeirshipNewTransferModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['id','first_name','middle_name','last_name','email','mobile'];
    displayedColumns1: string[] = ['id'];

    /**
     * Constructor
     */
    constructor(
        private _newHeirshipTransferDetailsService: NewHeirshipTransferDetailsService,
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
          console.log(this.user_property_code) 

          


        //heirship Transfer Form
        this.heirshipForm = this._formBuilder.group({
           
            user_property_code: [this.user_property_code],
            heirship_application_id:[''],
            heir_first_name: ['', Validators.required],
            heir_middle_name: [''],
            heir_last_name: ['', Validators.required],
            heir_first_name_mr: ['', Validators.required],
            heir_middle_name_mr: [''],
            heir_last_name_mr: ['', Validators.required],
            heir_type: ['1'],
            heir_mobile: ['', Validators.required],
            heir_email: ['', Validators.required],
            heir_aadhar: ['', Validators.required],
            heir_pancard: ['', Validators.required],
            heir_age : ['', Validators.required],
            heir_birth_place : [''],
            heir_married_status : ['', Validators.required],  
            heir_gender : ['', Validators.required],
            heir_current_address : ['', Validators.required],
            heir_permanent_address : ['', Validators.required],
            heir_job_title : [''],
            heir_company_details : [''],
            heir_aadhar_card  : ['', Validators.required],
            heir_pan_card  : ['', Validators.required],
            heir_photo  : ['', Validators.required],
            /*lease_agreement : [''],
            guarantee_letter : [''],
            allotment_certificate : [''],
            transfer_letter : [''],
            mou_document : [''],
            society_noc : [''],
            loan_noc : [''],
            bank_noc : [''],
            death_certificate : [''],
            medical_certificate : [''],
            married_women_affidavit : [''],*/

            //heir_profile_pic :['', Validators.required],  
          //  heir_profile_pic_file_data :[''],  
            //heir_documents :['', Validators.required],
            //heir_documents_file_data :[''],
           // user_property_code:[],
            created_by:[],
            created_at:[]
           
        });

        this.heirshipTransferForm = this._formBuilder.group({
            user_property_code: [this.user_property_code, Validators.required],
            number_add_nominy:['',Validators.required],
            number_remove_nominy:['0',Validators.required],
            removed_hireship:[''],
            lease_agreement : ['', Validators.required],
            guarantee_letter : [''],
            allotment_certificate : ['', Validators.required],
            transfer_letter : ['', Validators.required],
            death_certificate : [''],
            heir_documents : ['', Validators.required],
            heir_withdrawal_documents : [''],
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
                console.log(this.pd);
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

    changeRemoveHireEvent($event, val){
        console.log("beforeeeeeeeeeeeeee"+this.removeHireArray);
        if($event.checked){
            this.removeHireArray.push(val);
        }else{
            let newArray:number[];
            newArray = this.removeHireArray.filter((e, i) => e !== val); 
            this.removeHireArray = newArray;
        }
        console.log("afterrrrrrrrrrrrrrrrrrrrrr"+this.removeHireArray);
    }
    removeApplicants(){
        console.log("lenthhhhhhhhhhhhhhhhhhhhhh"+this.removeHireArray);
        if(this.c_number_remove_nominy==this.removeHireArray.length){
            this.showUploadBox = true;
        }else{
            alert(this.c_number_remove_nominy+" हक्कसोड वारसांच्या नावापुढील चेकबॉक्स टिक करा.");
        }
        //alert(this.heirshipTransferForm.value['removed_hireship']);
        
    }
    submit(): void{
        //console.log("########### 12345 ###############");
         console.log(this.heirshipTransferForm.value);
        
        if (this.heirshipTransferForm.invalid) {
            return;
        }

        // Disable the form
        this.heirshipTransferForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.heirshipTransferForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
     
       // this.heirshipTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
        
       this.heirshipTransferForm.value['removed_hireship']= this.removeHireArray;
       
        this._newHeirshipTransferDetailsService.submitApplication(this.heirshipTransferForm.value,this.documentData,this.pd.heirship_application_id)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.heirshipTransferForm.enable();
                    // Reset the form
                    this.heirshipTransferForm.reset();
                    // Set the alert
                    //this.transferee_response=response.response;
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    //this.pd.heirship_application_id = response.transfer_application_id
                    //this.getTransferee(this.pd.heirship_application_id);
                    // Re-enable the form
                    this.heirshipTransferForm.enable();
                    // Reset the form
                    this.heirshipTransferForm.reset();
                    //this.transferee_response="Transferee details shaved successfuly.";
                    //Navigate to the confirmation required page
                    //this._router.navigateByUrl('/citizens/fees');
                    //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.propertyTransferForm.value['user_id']);
                    //this._router.navigateByUrl('/citizens/fees/2');
                    this.removeHireArray=[];
                    this._router.navigateByUrl('/citizens/heirship-application/fees/'+this.pd.heirship_application_id);
                }
            },
                (response) => { }
            );
        //this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
        
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
                this.documentData[fileFor] = btoa(event.target.result);                
              };
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
   

    validateAadhar(number){

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
    
   

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    send(): void {
        
        if (this.heirshipForm.invalid) {
            return;
        }

        // Disable the form
        this.heirshipForm.disable();

        // Hide the alert
        this.showAlert = false;
        
        this.heirshipForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
        this.heirshipForm.value['heir_type'] = 1;
        this.heirshipForm.value['heirship_application_id'] = this.pd.heirship_application_id;
        this.heirshipForm.value['user_property_code'] = this.user_property_code;


                   
       // this.heirshipForm.value.user_property_code = this._activatedRoute.params['_value'].code;
         console.log(this.heirshipForm.value);


        this._newHeirshipTransferDetailsService.postData(this.heirshipForm.value,this.documentData)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.heirshipForm.enable();
                    // Reset the form
                    this.heirshipForm.reset();
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                   //this._router.navigateByUrl('/citizens/heirship-application/fees/2');
                   this.pd.heirship_application_id = response.heirship_application_id
                   this.getHeirs(this.pd.heirship_application_id);
                   //console.log("ressssssssssss"+this.transfereeForm.value['user_property_code']);
                   // Reset the form
                   this.heirshipForm.reset();
                   // Re-enable the form
                   this.heirshipForm.enable();
                   
                    
                   this.heir_response="Heir details saved successfuly.";
                  
                }
            },
                (response) => { }
            );
    }

    getHeirs(pta_id):void{
        this._masterService.getHeirShipData(pta_id)
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
                if(this.dataSource.data.length == this.c_number_add_nominy){
                    //this.fuseCard.face = 'front'
                    let el: HTMLElement = this.myDiv.nativeElement;
                    el.click();
                    this.showAddNewHeirButton = false;
                    if(this.c_number_remove_nominy > 0){
                        this.showRemoveHeirBox = true;
                        //this.showRemoveHeirBox = true;
                    }else{
                        this.showUploadBox = true;
                    }                
                }
               // console.log(this.transfereeData);
                
            }
        })
    }

    addApplicants(){
        let number_add_nominy = this.heirshipTransferForm.value['number_add_nominy'];
        let number_remove_nominy = this.heirshipTransferForm.value['number_remove_nominy'];
        if(number_add_nominy<=0){
            alert("न्यायालयीन वारस प्रमाणपत्रानुसार वारसांची संख्या प्रविष्ट करा.");
            return false;
        }
        if(number_add_nominy<=number_remove_nominy){
            alert("वारसांची संख्या हक्कसोड करून देणाऱ्यांची संख्या पेक्षा जास्त असावी.");
            return false;
        }
        this.c_number_add_nominy = number_add_nominy;
        this.c_number_remove_nominy = number_remove_nominy;

        //alert(number_add_nominy+"=="+number_remove_nominy);
        this.showApplicantBox = true;
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
