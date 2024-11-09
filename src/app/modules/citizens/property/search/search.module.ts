import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { SearchPropertyComponent } from 'app/modules/citizens/property/search/search.component';
import { SearchPropertyRoutes } from 'app/modules/citizens/property/search/search.routing';

@NgModule({
    declarations: [
        SearchPropertyComponent
    ],
    imports     : [
        RouterModule.forChild(SearchPropertyRoutes),
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
        MatCheckboxModule,
        MatFormFieldModule ,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule
    ]
})
export class CitizensSearchPropertyModule
{
    taluka_name_mr:string;
    taluka_name_en:string;
    taluka_code:number;
    village_code:number;
    village_name_mr:string;
    village_name_en:string;
    gpsc_code:number;
    gpsc_number:number;
    scheme_code:number;
    scheme_number:number;
    society_code:number;
    society_name_mr:string;
    society_name_en:string;
    code:number;
    sadnika_code :number;
    building_code:number;
  
    owner_name:string;
    owner_mobile:number;
    property_code:number;
    owner_id :number;
}
