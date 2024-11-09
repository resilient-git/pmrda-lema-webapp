import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'auth-confirmation-required',
  templateUrl: './confirmation-required.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AuthConfirmationRequiredComponent {

  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput: NgOtpInputComponent;
  /**
   * Constructor
   */
   alert: { type: FuseAlertType; message: string } = {
    type   : 'success',
    message: ''
};
showAlert: boolean = false;

  email: string = "";
  mobile: string;
  user_id: string;
  otp: string[];
  otp_from: number;
  otp_for: number = 1;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router:Router
    ) {

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
    this.email = this._activatedRoute.snapshot.queryParamMap.get('email');
    this.mobile = this._activatedRoute.snapshot.queryParamMap.get('mobile');
    this.user_id = this._activatedRoute.snapshot.queryParamMap.get('user_id');
    //console.log(this.mobile, this._activatedRoute.snapshot.queryParamMap.get('mobile'), "0000");

  }

  verifyOtp(valFromm): void {
    console.log(valFromm);
    this._authService.validateOTP({ otp_from: valFromm, otp_for: this.otp_for, user_id: this.user_id, otp: this.otp }).subscribe((response) => {
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
        this._router.navigateByUrl('/sign-in');
      }
    });

  }
}

