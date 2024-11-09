import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { MobileService } from 'app/modules/desk5/settings/mobile/mobile.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


@Component({
    selector       : 'mobile',
    templateUrl    : './mobile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileComponent implements OnInit, OnDestroy
{
    
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;

    mobileForm: FormGroup;

    url = [];
    showResend: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _mobileService: MobileService,
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
        this.mobileForm = this._formBuilder.group({
          newMobile: ['', [Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
          otp:['', Validators.required],
          password: ['', Validators.required],
    
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */

     keyPress(event: any) {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }

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