import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ViewApplicationService } from './view-application.service';

@Component({
    selector       : 'view-application',
    templateUrl    : './view-application.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewApplicationComponent
{
    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent;

    alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
    showAlert: boolean = false;

    owner_mobile:string;
    user_id: string;
    user_bankNoc_id:string;
    otp: string[];
    pdfSrc = "";
    preview_mode ="";

    // otp_from: number;
    // otp_for: number = 1;
    /**
     * Constructor
     */
    constructor( private _activatedRoute: ActivatedRoute,
      private _viewApplicationService: ViewApplicationService,
      private _router:Router)
    {
    }
    
    //   OTP verificatio
    onOtpChange(value: string[]): void {
        console.log(value);
        this.otp = value;
      }
     
      handleFillEvent(value: string): void {
        console.log(value);
      }

      ngOnInit(): void {
       
        this.preview_mode = this._activatedRoute.snapshot.queryParamMap.get('mode');
        this.user_id = JSON.parse(localStorage.getItem('currentUser')).id;
        this.user_bankNoc_id=this._activatedRoute.snapshot.queryParamMap.get('user_bankNoc_id');
        if(this.preview_mode =='transfer_application'){
          this.pdfSrc = "http://pmrda.potents.in/api/public/uploads/transfer/application/22.pdf";
        }else if(this.preview_mode =='transfer_fees'){
          this.pdfSrc = "http://pmrda.potents.in/api/public/uploads/transfer/application_fees/ptafon22.pdf";
        }

        
      }

      verifyOtp(): void {
        this._viewApplicationService.validateOtp({user_id: this.user_id, otp: this.otp,user_bankNoc_id:this.user_bankNoc_id, owner_mobile:this.owner_mobile }).subscribe((response) => {
          console.log(response);
          if (response.status != 200) {
            // Set the alert
            this.alert = {
              type: 'error',
              message: response.response
            };
    
            // Show the alert
            this.showAlert = true;
          } else {
            
            this._router.navigateByUrl('/citizens/new-transfer-application/'+ this.user_bankNoc_id);
            //this._router.navigateByUrl('/sign-in');
          }
        });
    
      }
    
}
