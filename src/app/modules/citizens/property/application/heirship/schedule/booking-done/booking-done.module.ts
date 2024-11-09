import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { BookingDoneHeirshipTransferComponent } from 'app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.component';
import { BookingDoneHeirshipTransferRoutes } from 'app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.routing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        BookingDoneHeirshipTransferComponent
    ],
    imports     : [
        RouterModule.forChild(BookingDoneHeirshipTransferRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        
        FormsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
     
    ]
})
export class CitizensBookingDoneHeirshipTransferModule
{
}