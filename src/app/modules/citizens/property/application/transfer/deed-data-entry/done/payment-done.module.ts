import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { DeedDataEntryPaymentDoneComponent } from 'app/modules/citizens/property/application/transfer/deed-data-entrydone/payment-done.component';
import { DeedDataEntryPaymentDoneRoutes } from 'app/modules/citizens/property/application/transfer/deed-data-entrydone/payment-done.routing';

@NgModule({
    declarations: [
        DeedDataEntryPaymentDoneComponent
    ],
    imports     : [
        RouterModule.forChild(DeedDataEntryPaymentDoneRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class CitizensDeedDataEntryPaymentDoneModule
{
}