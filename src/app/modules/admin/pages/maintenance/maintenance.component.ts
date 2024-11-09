import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
    selector       : 'maintenance',
    templateUrl    : './maintenance.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceComponent
{
    @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent;
    /**
     * Constructor
     */
    constructor()
    {
    }
    
    //   OTP verificatio
    onOtpChange(value: string[]): void {
        console.log(value);
      }
     
      handleFillEvent(value: string): void {
        console.log(value);
      }
}
