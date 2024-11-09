import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FuseAlertType } from '@fuse/components/alert';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ViewService } from './view.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector       : 'view',
    templateUrl    : './view.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit
{
    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent;
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;

    alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };

    approveForm: FormGroup;
    showAlert: boolean = false;
    is_agree: boolean = false;
    owner_mobile:string;
    user_id: string;
    user_property_id:string;
    otp: string[];
    pdfSrc = "";
    preview_mode ="";
    transfer_application_id=0;
    CertifiedDeedData:any;

    // otp_from: number;
    // otp_for: number = 1;
    /**
     * Constructor
     */
    constructor( private _activatedRoute: ActivatedRoute,
      private _viewApplicationService: ViewService,
      private _formBuilder: FormBuilder,
      private _location: Location,
      private _router:Router)
    {
    }
    dummyBinding():void{

    }

    onSelect(event,fileFor) {
        
      if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event: any) => {
              //console.log(event.target.result);
              //this.profile_pic = event.target.result;
              this.CertifiedDeedData = btoa(event.target.result);
            };             
          }
  }
    //   OTP verificatio
    onOtpChange(value: string[]): void {
        console.log(value);
        this.otp = value;
      }
     
      handleFillEvent(value: string): void {
        console.log(value);
      }
      goBack():void{
        this._location.back();
      }
      ngOnInit(): void {
       
        this.user_id = JSON.parse(localStorage.getItem('currentUser')).id;

        this._activatedRoute.params.subscribe(params => {
          //console.log(params) //log the entire params object
          //this.preview_mode=params['mode'];
          this.transfer_application_id=params['code'];
        });


        this._viewApplicationService.getTransferApplicationDeedDraft(this.transfer_application_id)
        .subscribe(() => {
            if (this._viewApplicationService.data$.source['_value'].status != 200) {
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: this._viewApplicationService.data$.source['_value'].response
                };
                // Show the alert
                this.showAlert = true;
            } else {
                let filename = this._viewApplicationService.data$.source['_value'].data.deed_draft_file_name;
                this.pdfSrc = "http://pmrda.potents.in/api/public/uploads/transfer/deed_draft/" + filename;
                console.log(this.pdfSrc);
                let el: HTMLElement = this.myDiv.nativeElement;
                el.click();
            }
        });
        
        this.approveForm = this._formBuilder.group({
          certified_deed : ['', Validators.required],
          created_by:[],
          created_at:[] 
        });

        console.log(this.pdfSrc);
      }

      
  sendApproval(): void {
    if (this.approveForm && this.approveForm.invalid) {
        return;
    }
    // Disable the form
    if (this.approveForm) {
      // Disable the form
      this.approveForm.disable();
    }
    // this.approveForm.disable();
    // Hide the alert
    this.showAlert = false;
  if(this.approveForm && this.approveForm.value){
    this.approveForm.value['user_id'] = JSON.parse(localStorage.getItem('currentUser')).id;
    this.approveForm.value['app_id'] = this.transfer_application_id;

    
   // this.propertyTransferForm.value.user_property_code = this._activatedRoute.params['_value'].code;
     console.log(this.approveForm.value);}
    /*
    if(this.pd.transfer_id>0){
        this.getTransferee(this.pd.transfer_id);
    }*/
    this._viewApplicationService.deedUplod(this.approveForm.value,this.CertifiedDeedData)
        .subscribe((response) => {
            if (response.status != 200) {
                // Re-enable the form
                this.approveForm.enable();
                // Reset the form
                this.approveForm.reset();
                // Set the alert
                //this.transferee_response=response.response;
                this.alert = {
                    type: 'error',
                    message: response.response
                };
                // Show the alert
                this.showAlert = true;
            } else {
               this._router.navigateByUrl('/citizens/transfer-applications/deed-upload-pending');
                /*this.pd.transfer_id = response.transfer_application_id
                this.getTransferee(this.pd.transfer_id);
                // Re-enable the form
                this.approveForm.enable();
                // Reset the form
                this.approveForm.reset();
                this.transferee_response="Transferee details shaved successfuly.";*/
                // Navigate to the confirmation required page
                // this._router.navigateByUrl('/citizens/fees');
                //this._router.navigateByUrl('/citizens/transfer-applications-details/' +  this.propertyTransferForm.value['user_id']);
                //this._router.navigateByUrl('/citizens/fees/2');
             /// this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
            }
          },(response)=>{}
          );
        }
           


      agreeStatus(event:any){
  
        if(event.target.checked==true){
          this.is_agree=true;
        }
        else{
          this.is_agree=false;
        }
      }
    
}
