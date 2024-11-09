import { NgModule } from "@angular/core";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule, MatDatepickerToggle } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { FuseCardModule } from "@fuse/components/card";
import { TranslocoModule } from "@ngneat/transloco";
import { MobileComponent } from 'app/modules/desk2/settings/mobile/mobile.component';
import { MobileRoutes } from 'app/modules/desk2/settings/mobile/mobile.routing';
import { SharedModule } from "app/shared/shared.module";
import { NgApexchartsModule } from "ng-apexcharts";
import { WebcamModule } from 'ngx-webcam';

@NgModule({
    declarations: [
        MobileComponent
    ],
    imports     : [
        RouterModule.forChild(MobileRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        NgApexchartsModule,
        TranslocoModule, 
        SharedModule,
        MatFormFieldModule,
        FuseCardModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
         MatMomentDateModule,
         MatOptionModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
       
        MatAutocompleteModule,
        
        

        
        
    ]
})
export class Desk2MobileModule
{
}
