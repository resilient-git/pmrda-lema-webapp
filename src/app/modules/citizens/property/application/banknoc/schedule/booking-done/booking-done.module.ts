import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { BookingDoneBankNocTransferComponent } from "./booking-done.component";
import { BookingDoneBankNocTransferRoutes } from "./booking-done.routing";

@NgModule({
    declarations: [
        BookingDoneBankNocTransferComponent
    ],
    imports     : [
        RouterModule.forChild(BookingDoneBankNocTransferRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        
        FormsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
     
    ]
})
export class CitizensBookingDoneBankNocTransferModule
{
}