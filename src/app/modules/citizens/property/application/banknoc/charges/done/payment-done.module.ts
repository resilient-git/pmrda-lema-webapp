import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { ChargesPaymentDoneComponent } from 'app/modules/citizens/property/application/transfer/charges/done/payment-done.component';
import { ChargesPaymentDoneRoutes } from 'app/modules/citizens/property/application/transfer/charges/done/payment-done.routing';

@NgModule({
    declarations: [
        ChargesPaymentDoneComponent
    ],
    imports     : [
        RouterModule.forChild(ChargesPaymentDoneRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class CitizensChargesPaymentDoneModule
{
}