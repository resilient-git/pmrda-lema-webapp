import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { InitiateComponent } from 'app/modules/citizens/property/application/transfer/deed-data-entry/initiate/initiate.component';
import { InitiateRoutes } from 'app/modules/citizens/property/application/transfer/deed-data-entry/initiate/initiate.routing';

@NgModule({
    declarations: [
        InitiateComponent
    ],
    imports     : [
        RouterModule.forChild(InitiateRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        MatDividerModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTabsModule,
        MatInputModule,
        MatProgressBarModule,
        MatStepperModule,
        CommonModule,
        MatCheckboxModule,
       
    ]
})
export class CitizensInitiateModule
{
}