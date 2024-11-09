import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { GetOtpComponent } from 'app/modules/citizens/property/get-otp/get-otp.component';
import { GetOtpRoutes } from 'app/modules/citizens/property/get-otp/get-otp.routing';
import { NgOtpInputModule } from 'ng-otp-input';
// import { NgxOtpInputModule } from "ngx-otp-input";

@NgModule({
    declarations: [
        GetOtpComponent
    ],
    imports     : [
        RouterModule.forChild(GetOtpRoutes),
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
export class CitizensGetOtpModule
{
}
