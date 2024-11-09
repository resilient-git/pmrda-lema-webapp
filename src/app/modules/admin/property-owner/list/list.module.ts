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
import { ListComponent } from 'app/modules/admin/property-owner/list/list.component';
import { ListRoutes } from 'app/modules/admin/property-owner/list/list.routing';
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

@NgModule({
    declarations: [
        ListComponent
    ],
    imports     : [
        RouterModule.forChild(ListRoutes),
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
        CommonModule
        
       
       
        
    ]
})
export class PropertiesOwnerListModule
{
    property_code : number;
    parent_owner_id : number;
    transfer_date : string;
    transfer_deed_registration_number_haveli_number : number;
    type_of_transfer : number;
    owner_name :string;
    owner_mobile : number;
    premium_of_flat : number;
    transfer_fee : number;
    ready_reackoner_rate_per_square_meter : number;
    remarks : string;
    court_cases :string;

}