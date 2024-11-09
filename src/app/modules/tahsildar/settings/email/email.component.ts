import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { EmailService } from 'app/modules/tahsildar/settings/email/email.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


@Component({
    selector       : 'email',
    templateUrl    : './email.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailComponent implements OnInit, OnDestroy
{
   
   
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    selected: Date | null;

    emailForm: FormGroup;

    url = [];
    showResend: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _emailService: EmailService,
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
       
        this.emailForm = this._formBuilder.group({
          newEmail: ['', [Validators.required, Validators.email,
                         Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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


     onSelect(event) {
        if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);
              reader.onload = (event: any) => {
                this.url = event.target.result;
              };
            }

       
    }

    
    

}