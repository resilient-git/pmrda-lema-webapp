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
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/desk5/property/application/transfer/calculation/details/document/document.component';
import { ViewPropertyTransferDocumentRoutes } from 'app/modules/desk5/property/application/transfer/calculation/details/document/document.routing';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FuseCardModule } from '@fuse/components/card';
import { MatDialogModule } from '@angular/material/dialog';

import { DndDirective } from 'app/core/direcitves/dnd.directive';
import { ProgressComponent } from 'app/core/components/progress/progress.component';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
    declarations: [
       // DndDirective,
        //ProgressComponent,
        ViewPropertyTransferDocumentComponent
    ],
    imports     : [
        RouterModule.forChild(ViewPropertyTransferDocumentRoutes),
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
        MatStepperModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatListModule,
        CommonModule,
        FuseCardModule,
        MatDialogModule,
        MatGridListModule
    ]
})

export class ViewPropertyTransferDocumentModule
{
    id:number;
    first_name:string;
    middle_name:string;
    last_name:string;
    email:string;
    mobile:string;
    photo:string;
    
}
