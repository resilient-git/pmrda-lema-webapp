import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Activity } from 'app/modules/admin/pages/activities/activities.types';
import { ActivitiesService } from 'app/modules/admin/pages/activities/activities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector       : 'activity',
    templateUrl    : './activities.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent implements OnInit
{
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;

    activities$: Observable<Activity[]>;
    horizontalStepperForm: FormGroup;

    selected: Date | null;

    url = [];
    onSelect(event) {
        // let fileType = event.target.files[0].type;
        // if (fileType.match(/image\/*/)) {
        //   let reader = new FileReader();
        //   reader.readAsDataURL(event.target.files[0]);
        //   reader.onload = (event: any) => {
        //     this.url = event.target.result;
        //   };
        // }
        if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
              reader.onload = (event: any) => {
                this.url = event.target.result;
              };
            }
            else {
                window.alert('Please select correct image format');
              }   
    }

      @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
      myfilename = 'Select File';
    //   

    /**
     * Constructor
     */
    constructor(public _activityService: ActivitiesService,
        private _formBuilder: FormBuilder)
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
        // Get the activities
        // this.activities$ = this._activityService.activities;

        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                // peth   : ['', [Validators.required]],
                // bulk_land : ['', Validators.required],
                // grahyojana: ['', Validators.required],
                // society: ['', Validators.required],
                // building: ['', Validators.required],
                // sadnika: ['', Validators.required]
            }),
            step2: this._formBuilder.group({
                // firstName: ['', Validators.required],
                // middleName: ['', Validators.required],
                // lastName: ['', Validators.required],
                // currentAddress : ['', Validators.required],
                // permanentAddress : ['', Validators.required],
                // placeofbirth : ['', Validators.required],
                // age : ['', Validators.required],
                // dateofbirth : ['', Validators.required],
                // marritalstatus : this._formBuilder.group({
                //     married     : [true],
                //     unmarried: [false]                
                // }),  
                // job : ['', Validators.required],
                // companyNameWithAddress : ['', Validators.required],
                // photo :  ['', Validators.required]
                // avatar      : [null]
            }),
            step3: this._formBuilder.group({
                // byEmail          : this._formBuilder.group({
                //     companyNews     : [true],
                //     featuredProducts: [false],
                //     messages        : [true]
                // }),
                // pushNotifications: ['everything', Validators.required]
            }),
            step4: this._formBuilder.group({
                
                agreements: ['', Validators.requiredTrue]
            })
        });
    }

    

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Upload avatar
     *
     * @param fileList
     */
    uploadAvatar(fileList: FileList): void
    {
      // Return if canceled
      if ( !fileList.length )
      {
          return;
      }

      const allowedTypes = ['image/jpeg', 'image/png'];
      const file = fileList[0];

      // Return if the file is not allowed
      if ( !allowedTypes.includes(file.type) )
      {
          return;
      }
    }

    
    /**
     * Returns whether the given dates are different days
     *
     * @param current
     * @param compare
     */
    isSameDay(current: string, compare: string): boolean
    {
        return moment(current, moment.ISO_8601).isSame(moment(compare, moment.ISO_8601), 'day');
    }
    

    /**
     * Get the relative format of the given date
     *
     * @param date
     */
    getRelativeFormat(date: string): string
    {
        const today = moment().startOf('day');
        const yesterday = moment().subtract(1, 'day').startOf('day');

        // Is today?
        if ( moment(date, moment.ISO_8601).isSame(today, 'day') )
        {
            return 'Today';
        }

        // Is yesterday?
        if ( moment(date, moment.ISO_8601).isSame(yesterday, 'day') )
        {
            return 'Yesterday';
        }

        return moment(date, moment.ISO_8601).fromNow();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    onAdd(e: Event) {
        e.preventDefault();
        e.stopImmediatePropagation();
    }
    


    // fileChangeEvent(fileInput: any) {

    //     if (fileInput.target.files && fileInput.target.files[0]) {
    
    
    //       this.myfilename = '';
    //       Array.from(fileInput.target.files).forEach((file: File) => {
    //         console.log(file);
    //         this.myfilename += file.name + ',';
    //       });
    //       const reader = new FileReader();
    //       reader.onload = (e: any) => {
    //         const image = new Image();
    //         image.src = e.target.result;
    //         image.onload = rs => {
    
    //           // Return Base64 Data URL
    //           const imgBase64Path = e.target.result;
    
    //         };
    //       };
    //       reader.readAsDataURL(fileInput.target.files[0]);
    
    //       // Reset File Input to Selct Same file again
    //       this.uploadFileInput.nativeElement.value = "";
    //     } else {
    //       this.myfilename = 'Select File';
    //     }
    //   }
    
    }

