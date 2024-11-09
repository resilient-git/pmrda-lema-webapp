import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ViewService } from './view.service';

@Component({
    selector       : 'view',
    templateUrl    : './view.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent
{
    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent;
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;

    alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
    showAlert: boolean = false;
    is_agree: boolean = false;
    owner_mobile:string;
    user_id: string;
    user_property_id:string;
    otp: string[];
    pdfSrc = "";
    preview_mode ="";
    transfer_application_id=0;

    // otp_from: number;
    // otp_for: number = 1;
    /**
     * Constructor
     */
    constructor( private _activatedRoute: ActivatedRoute,
      private _viewApplicationService: ViewService,
      private _location: Location,
      private _router:Router)
    {
    }
    dummyBinding():void{

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
       

        console.log(this.pdfSrc);
      }

      approve(){
        if(this.is_agree==true){
          
        // Hide the alert
        this.showAlert = false;

       
        this._viewApplicationService.approveDraft(this.transfer_application_id,this.user_id)
            .subscribe((response) => {
                if (response.status != 200) {
                    // Re-enable the form
                    
                    this.alert = {
                        type: 'error',
                        message: response.response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    this._router.navigateByUrl('/citizens/transfer-applications/deed-verify-pending');

                }
            },
                (response) => { }
            );
        //this._router.navigateByUrl('/citizens/transfer-application/fees/'+this.propertyTransferForm.value['user_property_code']+'/'+response.transfer_application_id);
        
    
        }else{
          alert("Please agree the terms");
        }
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
