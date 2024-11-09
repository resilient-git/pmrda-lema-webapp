import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { NgOtpInputModule } from 'ng-otp-input';
// import { NgxOtpInputModule } from "ngx-otp-input";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewApplicationComponent } from './view-application.component';
import { ViewApplicationRoutes } from './view-application.routing';

@NgModule({
    declarations: [
        ViewApplicationComponent
    ],
    imports     : [
        RouterModule.forChild(ViewApplicationRoutes),
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule,
        MatButtonToggleModule,
        // NgxOtpInputModule,
        NgOtpInputModule,
        PdfViewerModule
        
    ]
})
export class CitizensViewApplicationModule
{
}
