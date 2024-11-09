import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { MaintenanceComponent } from 'app/modules/admin/pages/maintenance/maintenance.component';
import { maintenanceRoutes } from 'app/modules/admin/pages/maintenance/maintenance.routing';
import { NgOtpInputModule } from 'ng-otp-input';
// import { NgxOtpInputModule } from "ngx-otp-input";

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(maintenanceRoutes),
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
export class MaintenanceModule
{
}
