import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { SettingsService } from 'app/modules/jre/settings/settings.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


@Component({
    selector       : 'settings',
    templateUrl    : './settings.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy
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


    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;

    profileForm: FormGroup;

    url = [];

    /**
     * Constructor
     */
    constructor(
        private _settingsService: SettingsService,
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
            phoneNumber : ['', Validators.required],
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