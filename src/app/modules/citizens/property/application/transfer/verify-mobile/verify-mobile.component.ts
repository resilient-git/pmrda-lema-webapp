import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { NgOtpInputComponent } from 'ng-otp-input';
import { VerifyMobileService } from './verify-mobile.service';

@Component({
    selector       : 'verify-mobile',
    templateUrl    : './verify-mobile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyMobileComponent
{
    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent;

    alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
    showAlert: boolean = false;

    owner_mobile:string;
    user_id: string;
    user_property_id:string;
    otp: string[];
    
    // otp_from: number;
    // otp_for: number = 1;
    /**
     * Constructor
     */
    constructor( private _activatedRoute: ActivatedRoute,
      private _verifyMobileService: VerifyMobileService,
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
       
        this.owner_mobile = this._activatedRoute.snapshot.queryParamMap.get('owner_mobile');
        this.user_id = JSON.parse(localStorage.getItem('currentUser')).id;
        this.user_property_id=this._activatedRoute.snapshot.queryParamMap.get('user_property_id');
      }

      verifyOtp(): void {
        this._verifyMobileService.validateOtp({user_id: this.user_id, otp: this.otp,user_property_id:this.user_property_id, owner_mobile:this.owner_mobile }).subscribe((response) => {
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
            
            this._router.navigateByUrl('/citizens/new-transfer-application/'+ this.user_property_id);
            //this._router.navigateByUrl('/sign-in');
          }
        });
    
      }
    
}
