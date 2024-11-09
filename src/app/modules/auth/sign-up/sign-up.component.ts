import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { FuseValidators } from '@fuse/validators';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
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
        // Create the form
        this.signUpForm = this._formBuilder.group({
                first_name      : ['', Validators.required],
                last_name      : ['', Validators.required],
                mobile      : ['', [Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
                //mobilenumber      : ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[6-9]{1}[0-9]{9}$")]],
                username_mode : ['', Validators.required],
                email     : ['', [Validators.required, Validators.email]],
                username   : ['', Validators.required],
                password  : ['', Validators.required],
                passwordConfirm : ['', Validators.required],
                agreements: ['', Validators.requiredTrue]
            },
            {
                validators: FuseValidators.mustMatch('password', 'passwordConfirm')
            }
        );
        this.signUpForm.get('username').disable({ onlySelf: true });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
        }
      }
    /**
     * Sign up
     */
    signUp(): void
    {
        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUp(this.signUpForm.value)
        .subscribe((response) => {
            if (response.status != 200) {
                // Re-enable the form
                this.signUpForm.enable();

                // Reset the form
               // this.signUpNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type: 'error',
                    message: response.response
                };

                // Show the alert
                this.showAlert = true;
            }else{

            // Navigate to the confirmation required page
            this._router.navigateByUrl('/confirmation-required?user_id=' + response.user_id + "&email=" + response.email + "&mobile=" + response.mobile);
            //this._router.navigateByUrl('/confirmation-required');
            }
        },
        (response) =>{}

        );
        }

    /**
     * Set Username mode - mobile,email,custom
     */
     setUsernameMode(umode):void
     {
        console.log("######");
        this.signUpForm.get('username').disable({ onlySelf: true });
        if(umode.value == 1){
            this.signUpForm.get('username').setValue(this.signUpForm.get('mobile').value);
        }else if (umode.value == 2){
            this.signUpForm.get('username').setValue(this.signUpForm.get('email').value)
        }else{
            this.signUpForm.get('username').setValue("");
            this.signUpForm.get('username').enable({ onlySelf: true });
        }
     }
}
