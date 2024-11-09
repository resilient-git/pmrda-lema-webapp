import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { AppointmentComponent } from 'app/modules/dy-commissioner/property/application/transfer/appointment/appointment.component';
import { AppointmentRoutes } from 'app/modules/dy-commissioner/property/application/transfer/appointment/appointment.routing';
import { MatLabel } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { FuseCardModule } from '@fuse/components/card';


@NgModule({
    declarations: [
        AppointmentComponent
    ],
    imports     : [
        RouterModule.forChild(AppointmentRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
        MatInputModule,
        MatPaginatorModule,
        MatOptionModule,
        MatSelectModule,
        MatExpansionModule,
        CommonModule,
        FuseCardModule
        
       
       
        
    ]
})
export class DyCommissionerAppointmentTransferModule
{
    owner_name:string;
    owner_mobile:number;
    uprn:number;
    transferee_first_name:string;
    transferee_middle_name:string;
    transferee_last_name:string;
    transferee_mobile:number;
    transferee_email:string;
    status:number;
    status_text:string;
   

}