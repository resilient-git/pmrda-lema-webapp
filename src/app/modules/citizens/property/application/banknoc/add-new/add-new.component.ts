import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MastersService } from 'app/modules/admin/masters/masters.service';
import { FuseAlertType } from '@fuse/components/alert';
import { MatDialog } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { CitizensBankNocNewTransferModule } from './add-new.module';
import { NewBankNocTransferDetailsService } from './add-new.service';

interface Purpose{
    value: string;
    viewValue: string;
  }
@Component({
    selector       : 'NewBankNocTransfer',
    templateUrl    : './add-new.component.html',
    styleUrls  : ['./add-new.component.scss'],
    styles:['.mat-option { height: 4em !important; line-height: 1.6em !important;border-bottom:1px solid #eee;}'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewBankNocTransferDetailsComponent implements OnInit
{
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
    files: any[] = [];
    bankNocTransferForm: FormGroup;
    shouldShowFileInput: boolean = false;
    selectedOption: string = 'No';
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
    documentData:any={
                    "lease_agreement":"",
                    "sanction_letter":"",
                    "loan_rason_letter":"",
                    "society_consent_letter":"",
                    "share_certificate":"",
                    "socienty_member_list":"",                  
                    "affidavit_letter":"",
                    "approved_map":"",
                    "lezy_aadhar_card":"",
                    "lezy_pan_card":"",
                    "lezy_photo":"",   
                    "origin_noc":"",
                    "no_dues":""
                };

    isData$ = new BehaviorSubject([]);


    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    hasOldNoC: boolean = false;
    showAlert: boolean = false;
    pd : any;
    dataSource: MatTableDataSource<CitizensBankNocNewTransferModule> = new MatTableDataSource([]);
    displayedColumns: string[] = ['id','first_name','middle_name','last_name','email','mobile'];
    purposes: Purpose[] = [
        {value: 'Medical', viewValue: 'Medical/वैद्यकीय'},
        {value: 'Education', viewValue: 'Education/शिक्षण'},
        {value: 'Business Renovation', viewValue: 'Business Renovation/व्यवसाय नूतनीकरण'},
        {value: 'Payment to Original Owner', viewValue: 'Payment to Original Owner/मूळ मालकाला पेमेंट'},
        {value: 'Change in Financial Institution', viewValue: 'Change in Financial Institution/बँक बदल'},
      ];
    /**
     * Constructor
     */
    constructor(
        private _newBankNocTransferDetailsService: NewBankNocTransferDetailsService,
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

        this.bankNocTransferForm = this._formBuilder.group({
            user_property_code: [this.user_property_code, Validators.required],
            bank_name: ['', Validators.required],
            loan_purpose: ['', Validators.required],
            loan_note: [''],
            lease_agreement  : ['', Validators.required],
            sanction_letter  : ['', Validators.required],
            loan_rason_letter  : ['', Validators.required],
            society_consent_letter  : [''],
            share_certificate  : [''],
            socienty_member_list  : [''],                  
            affidavit_letter : ['', Validators.required],
            approved_map : [''],
            lezy_aadhar_card  : ['', Validators.required],
            lezy_pan_card  : ['', Validators.required],
            lezy_photo  : ['', Validators.required],   
            is_old_noc : [''],
            origin_noc : [''],
            no_dues : [''],
            created_by:[],
            created_at:[]
        });

        this._masterService.getUserBankNocData(this.user_property_code)
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

    setOldNoCOptions(eleVal) {
        this.hasOldNoC = false;
        if(eleVal == 1){
            this.hasOldNoC = true;
        }
        console.log(eleVal);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    // checkIfUploadAllowed() {
    //   const isUploadAllowed = true; 
    //   this.shouldShowFileInput = isUploadAllowed;
    // }

    // onSelect(event,fileFor) {
        // let fileType = event.target.files[0].type;
        // if (fileType.match(/image\/*/)) {
        //   let reader = new FileReader();
        //   reader.readAsDataURL(event.target.files[0]);
        //   reader.onload = (event: any) => {
        //     this.url = event.target.result;
        //   };
        // }
       ///// if (event.target.files) {
             ///// var reader = new FileReader();
            /////  reader.readAsDataURL(event.target.files[0]);
             ///// reader.onload = (event: any) => {
                //console.log(event.target.result);
                //this.profile_pic = event.target.result;
      /////          this.documentData[fileFor] = event.target.result;
                
                /*
                setTimeout (() => {
                    console.log("Hello from setTimeout");
                    let element:HTMLElement = document.getElementById('auto_trigger') as HTMLElement;

                    //this.myDiv.nativeElement.click();
                    //let el: HTMLElement = this.myDiv.nativeElement;
                    element.click();
                 }, 1000);*/
                
          /////    };
              //this.profile_pic=this.url;
              //console.log(this.url);              
        /////    }

       
   ///// }

   onSelect(event,fileFor) {
    if (event.target.files) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event: any) => {
            this.documentData[fileFor] = btoa(event.target.result);
          };             
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
    submit(): void{
        //console.log("########### 12345 ###############");
        if (this.bankNocTransferForm.invalid) {
            return;
        }

        // Disable the form
        this.bankNocTransferForm.disable();

        // Hide the alert
        this.showAlert = false;

        this.bankNocTransferForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
     
       // this.bankNocTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
        
         
        this._newBankNocTransferDetailsService.submitApplication(this.bankNocTransferForm.value,this.documentData,this.pd.application_id)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    this.bankNocTransferForm.enable();
                    // Reset the form
                    this.bankNocTransferForm.reset();
                    // Set the alert
                    this.transferee_response=response.response;
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    this.pd.application_id = response.banknoc_application_id
                    // Re-enable the form
                    this.bankNocTransferForm.enable();
                    // Reset the form
                    this.bankNocTransferForm.reset();
                    this.transferee_response="Transferee details shaved successfuly.";
                    // Navigate to the confirmation required page
                    // this._router.navigateByUrl('/citizens/fees');
                    //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.bankNocTransferForm.value['user_id']);
                    //this._router.navigateByUrl('/citizens/fees/2');
                    this._router.navigateByUrl('/citizens/banknoc-application/fees/'+this.pd.application_id);

                }
            },
                (response) => { }
            );
        //this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.bankNocTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
        
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
