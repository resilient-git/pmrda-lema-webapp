import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { DeedPrintingPaymentDoneComponent } from 'app/modules/desk1/property/application/transfer/deed_printingdone/payment-done.component';
import { DeedPrintingPaymentDoneRoutes } from 'app/modules/desk1/property/application/transfer/deed_printingdone/payment-done.routing';

@NgModule({
    declarations: [
        DeedPrintingPaymentDoneComponent
    ],
    imports     : [
        RouterModule.forChild(DeedPrintingPaymentDoneRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class Desk1DeedPrintingPaymentDoneModule
{
}