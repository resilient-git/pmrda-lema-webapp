import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { VerifyMobileComponent } from 'app/modules/citizens/property/application/transfer/verify-mobile/verify-mobile.component';
import { VerifyMobileRoutes } from 'app/modules/citizens/property/application/transfer/verify-mobile/verify-mobile.routing';
import { NgOtpInputModule } from 'ng-otp-input';
// import { NgxOtpInputModule } from "ngx-otp-input";

@NgModule({
    declarations: [
        VerifyMobileComponent
    ],
    imports     : [
        RouterModule.forChild(VerifyMobileRoutes),
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule,
        MatButtonToggleModule,
        // NgxOtpInputModule,
        NgOtpInputModule
        
    ]
})
export class CitizensVerifyMobileModule
{
}
