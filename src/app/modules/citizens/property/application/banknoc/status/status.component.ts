import { ChangeDetectionStrategy,ElementRef,ViewChild, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/shared.service';
import { FuseAlertType } from '@fuse/components/alert';
import { TransferStatusService } from './status.service';

@Component({
    selector       : 'transferstatus',
    templateUrl    : './status.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferStatusComponent implements OnInit, OnDestroy
{
    horizontalStepperForm: FormGroup;

    talukaData: any;
    villageData: any;
    gpscData: any;
    schemesData: any;
    schemeStructureData: any;
    societyData:any;
    buildingData:any;
    sadnikaData:any;
    ownerData:any;
    bankNocData : any;
    pd:any = {};
    showLoader:boolean=false;
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    showAlert: boolean = false;
   
   
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _searchBankNocService: TransferStatusService,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _sharedService: SharedService,
        private _activatedRoute: ActivatedRoute,
       
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
           // bankNoc_code_year :['2023-24'],
            bankNoc_code :['', Validators.required]
        });

    }

    getApplicationStatus(): void {
        let code = this.horizontalStepperForm.get('bankNoc_code')?.value;
        this.showLoader= true;
        this.pd = {};
    //const code = this._activatedRoute.params['_value'].code;
        const payload = { 
            "app_id": "PTAN/2023-24/"+code
        }
        this._sharedService.searchData(payload)
        .subscribe(() => {
            if (this._sharedService.data$.source['_value'].status != 200) {
            // Set the alert
            this.alert = {
                type: 'error',
                message: this._sharedService.data$.source['_value'].response
            };

            // Show the alert
            this.showAlert = true;
            } else {
                this.pd = this._sharedService.data$.source['_value'].data[0];
                //this.bankNoc_code.
                //event.click();
                //this.horizontalStepperForm.get('bankNoc_code').prop;
                console.log(this.pd)
            }
            this.showLoader = false;
            let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
    setTimeout(()=> el.click(), 500);
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
   

    

   
}
