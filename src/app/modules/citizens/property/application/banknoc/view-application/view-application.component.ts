import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ViewApplicationService } from './view-application.service';

@Component({
    selector       : 'view-application',
    templateUrl    : './view-application.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewApplicationComponent
{
    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent;
    @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;

    alert: { type: FuseAlertType; message: string } = {
      type   : 'success',
      message: ''
  };
    showAlert: boolean = false;

    owner_mobile:string;
    user_id: string;
    user_property_id:string;
    otp: string[];
    pdfSrc = "";
    preview_mode ="";
    transfer_application_id=0;

    // otp_from: number;
    // otp_for: number = 1;
    /**
     * Constructor
     */
    constructor( private _activatedRoute: ActivatedRoute,
      private _viewApplicationService: ViewApplicationService,
      private _location: Location,
      private _router:Router)
    {
    }
    dummyBinding():void{

    }
    //   OTP verificatio
    onOtpChange(value: string[]): void {
        console.log(value);
        this.otp = value;
      }
     
      handleFillEvent(value: string): void {
        console.log(value);
      }
      goBack():void{
        this._location.back();
      }
      ngOnInit(): void {
        this.user_id = JSON.parse(localStorage.getItem('currentUser')).id;

        this._activatedRoute.params.subscribe(params => {
          //console.log(params) //log the entire params object
          this.preview_mode=params['mode'];
          this.transfer_application_id=params['code'];
        });

        if(this.preview_mode =='transfer_application'){
          this.pdfSrc = "http://pmrda.potents.in/api/public/uploads/transfer/application/22.pdf";
        }else if(this.preview_mode =='transfer_fees'){
          this._viewApplicationService.getApplicationReciept(this.transfer_application_id)
            .subscribe(() => {
                if (this._viewApplicationService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._viewApplicationService.data$.source['_value'].response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    let filename = this._viewApplicationService.data$.source['_value'].data.receipt_file_name;
                    this.pdfSrc = "http://pmrda.potents.in/api/public/uploads/banknoc/application_fees/" + filename;
                    console.log(this.pdfSrc);
                    let el: HTMLElement = this.myDiv.nativeElement;
                    el.click();
                }
            });
        }else if(this.preview_mode =='transfer_charges'){
          this._viewApplicationService.getTransferApplicationChargesReciept(this.transfer_application_id)
            .subscribe(() => {
                if (this._viewApplicationService.data$.source['_value'].status != 200) {
                    // Set the alert
                    this.alert = {
                        type: 'error',
                        message: this._viewApplicationService.data$.source['_value'].response
                    };
                    // Show the alert
                    this.showAlert = true;
                } else {
                    let filename = this._viewApplicationService.data$.source['_value'].data.receipt_file_name;
                    this.pdfSrc = "http://pmrda.potents.in/api/public/uploads/transfer/application_charges/" + filename;
                    console.log(this.pdfSrc);
                    let el: HTMLElement = this.myDiv.nativeElement;
                    el.click();
                }
            });
        }

        console.log(this.pdfSrc);
      }
    
}
