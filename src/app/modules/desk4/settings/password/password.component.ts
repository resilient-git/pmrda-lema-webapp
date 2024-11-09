import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { PasswordService } from 'app/modules/desk4/settings/password/password.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { FuseValidators } from "@fuse/validators";


@Component({
    selector       : 'password',
    templateUrl    : './password.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent implements OnInit, OnDestroy
{
   private _unsubscribeAll: Subject<any> = new Subject<any>();
   
    passwordForm: FormGroup;

    url = [];

    /**
     * Constructor
     */
    constructor(
        private _passwordService: PasswordService,
        private _router: Router,
        private _formBuilder: FormBuilder
    )
    {
    }

    /**
     * On init
     */
     ngOnInit(): void
     {
       
        this.passwordForm = this._formBuilder.group({
          currentPassword: ['', Validators.required],
          newPassword:['', Validators.required],
          reEnterPassword: ['', Validators.required],
          
     })
     {
      validators: FuseValidators.mustMatch('newPassword', 'reEnterPassword')
  }
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */


     onSelect(event) {
        if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
              reader.onload = (event: any) => {
                this.url = event.target.result;
              };
            }

       
    }

    
    /**
     * Upload avatar
     *
     * @param fileList
     */
    //  uploadAvatar(fileList: FileList): void
    //  {
    //      // Return if canceled
    //      if ( !fileList.length )
    //      {
    //          return;
    //      }
 
    //      const allowedTypes = ['image/jpeg', 'image/png'];
    //      const file = fileList[0];
 
    //      // Return if the file is not allowed
    //      if ( !allowedTypes.includes(file.type) )
    //      {
    //          return;
    //      }
 
    //      // Upload the avatar
    //      this._contactsService.uploadAvatar(this.contact.id, file).subscribe();
    //  }
 
     /**
      * Remove the avatar
      */
    //  removeAvatar(): void
    //  {
    //      // Get the form control for 'avatar'
    //      const avatarFormControl = this.contactForm.get('avatar');
 
    //      // Set the avatar as null
    //      avatarFormControl.setValue(null);
 
    //      // Set the file input value as null
    //      this._avatarFileInput.nativeElement.value = null;
 
    //      // Update the contact
    //      this.contact.avatar = null;
    //  }
 

}