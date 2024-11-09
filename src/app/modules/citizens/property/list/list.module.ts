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
import { ListComponent } from 'app/modules/citizens/property/list/list.component';
import { ListRoutes } from 'app/modules/citizens/property/list/list.routing';
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
export class CitizensListPropertiesModule
{
    taluka_name_mr:string;
    taluka_name_en:string;
    taluka_code:number;
    village_code:number;
    village_name_mr:string;
    village_name_en:string;
    gpsc_code:number;
    gpsc_number:number;
    structure_code:number;
    structure_type_name_mr:string;
    structure_type_name_en:string;
    scheme_code:number;
    scheme_number:number;
    society_code:number;
    society_name_mr:string;
    society_name_en:string;
    code:number;
    building_code:number;
    building_number:number;
    sadnika_number:number;
    sadnika_code:number;
    property_code:number;
    owner_name:string;
    owner_mobile:number;
    uprn:number;

}