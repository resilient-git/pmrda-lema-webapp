import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { isEmpty } from 'lodash';
import { cloneDeep } from 'lodash-es';
@Component({
    selector     : 'citizens-access-in',
    templateUrl  : './citizens-access.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class CitizensAccessComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
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
        this.signInForm = this._formBuilder.group({
            username     : ['citizen', [Validators.required]],
            password  : ['password', Validators.required],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(
                () => {


                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    let redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL');
                    if(isEmpty(redirectURL)){
                        let user = cloneDeep(JSON.parse(localStorage.getItem('currentUser')));
                        if(user.role_id == 1){
                            redirectURL = '/admin/';
                        }else if(user.role_id == 2){
                            redirectURL = '/citizens/';
                        }else if(user.role_id == 3){
                            redirectURL = '/desk1/';
                        }else if(user.role_id == 4){
                            redirectURL = '/desk2/';
                        }else if(user.role_id == 5){
                            redirectURL = '/desk3/';
                        }
                        redirectURL += 'dashboard';
                    }
                    //const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                    
                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                },
                (response) => {
console.log(response);

                    // Re-enable the form
                    this.signInForm.enable();

                    // Reset the form
                    this.signInNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Wrong username or password'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}
