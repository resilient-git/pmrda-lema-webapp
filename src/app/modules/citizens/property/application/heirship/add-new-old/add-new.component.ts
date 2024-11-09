import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPropertyTransferService } from 'app/modules/citizens/property/application/transfer/add-new-old/add-new.service';

@Component({
    selector       : 'NewPropertyTransfer',
    templateUrl    : './add-new.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPropertyTransferComponent implements OnInit
{
    @ViewChild('avatarFileInput') private _avatarFileInput: ElementRef;
    horizontalStepperForm: FormGroup;
    selectedProject: string = 'RLab Crop. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;
    url = [];
    @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
    myfilename = 'Select File';


    // marritalStatus: any = [
    //     {"name": "Married", "value": 1, "checked": false},
    //     {"name": "UnMarried", "value": 2, "checked": false}
    //   ];
    /**
     * Constructor
     */
    constructor(
        private _NewPropertyTransferService: NewPropertyTransferService,
        private _router: Router,
        private _formBuilder: FormBuilder
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
        if(2 !== (JSON.parse(localStorage.getItem('currentUser')).role_id)){this._router.navigateByUrl('/restricted-access');}
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                     property  : this._formBuilder.group({
                    one      : [true],
                    two      : [false],
                    three    : [false],
                    four     :  [false]
                }),
                pushNotifications: ['everything', Validators.required]
            }),
            step2: this._formBuilder.group({
                firstName: ['', Validators.required],
                middleName: ['', Validators.required],
                lastName: ['', Validators.required],
                currentAddress : ['', Validators.required],
                permanentAddress : ['', Validators.required],
                placeofbirth : ['', Validators.required],
                age : ['', Validators.required],
                marritalstatus : this._formBuilder.group({
                    married     : [false],
                    unmarried: [true]
                    
                }),  
                job : ['', Validators.required],
                companyNameWithAddress : ['', Validators.required],
                photo :['', Validators.required],
                // avatar      : [null]
            }),
            step3: this._formBuilder.group({

                uploadForm      : ['', Validators.required],
                declarationForTransformer : ['', Validators.required],
                declarationForNoLoan : ['', Validators.required],
                warrantyLetter : ['', Validators.required],
                transfereeDetails : ['', Validators.required],
                

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

       
    }

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
     
    
   

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

   
}
