import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { ProfileService } from 'app/modules/citizens/profile/profile.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { takeUntil } from "rxjs/operators";
import { Profile } from "app/modules/citizens/profile/profile.types";


@Component({
    selector       : 'profile',
    templateUrl    : './profile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy
{
    
    // Take Picture
    @Output() getPicture = new EventEmitter<WebcamImage>();
    showWebcam = true;
    isCameraExist = true;
  
    errors: WebcamInitError[] = [];
   
    // webcam snapshot trigger
   private trigger: Subject<void> = new Subject<void>();
   private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

   webcamImage: WebcamImage | undefined;

   profile$: Observable<Profile[]>;
   profileCount: number = 0;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;
    selectedProfile: Profile;

    profileForm: FormGroup;

    url = [];

    /**
     * Constructor
     */
    constructor(
        private _profileService: ProfileService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _changeDetectorRef: ChangeDetectorRef,
    )
    {
    }

    /**
     * On init
     */
     ngOnInit(): void
     {
       // Get the profile
       this._profileService.profile$
       .pipe(takeUntil(this._unsubscribeAll))
       .subscribe((profile: Profile) => {
console.log(profile);

           // Update the selected profile
           this.selectedProfile = profile;

           // Mark for check
           this._changeDetectorRef.markForCheck();
       });
       

        WebcamUtil.getAvailableVideoInputs()
        .then((mediaDevices: MediaDeviceInfo[]) => {
          this.isCameraExist = mediaDevices && mediaDevices.length > 0;
        });

        this.profileForm = this._formBuilder.group({
            firstName: ['', Validators.required],
            middleName:['', Validators.required],
            lastName: ['', Validators.required],
            dateofbirth : ['', Validators.required],
            gender : ['', Validators.required],
            emailId : ['', Validators.required],
            phoneNumber : ['', [Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
            address: ['', Validators.required],
            number: ['', Validators.required],
            city: ['', Validators.required],
            zip: ['', Validators.required],
            photo : ['', Validators.required],         

     })
    }

    
    takeSnapshot(): void {
        this.trigger.next();
    }

    onOffWebCame() {
        this.showWebcam = !this.showWebcam;
      }
    
      handleInitError(error: WebcamInitError) {
        this.errors.push(error);
      }
    
      changeWebCame(directionOrDeviceId: boolean | string) {
        this.nextWebcam.next(directionOrDeviceId);
      }
    
      handleImage1(webcamImage: WebcamImage) {
        this.getPicture.emit(webcamImage);
        this.showWebcam = false;
      }
    
      get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
      }
    
      get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
      }

      handleImage(webcamImage: WebcamImage) {
        this.webcamImage = webcamImage;
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