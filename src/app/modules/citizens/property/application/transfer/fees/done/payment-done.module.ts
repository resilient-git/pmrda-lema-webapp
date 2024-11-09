import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { FeesPaymentDoneComponent } from 'app/modules/citizens/property/application/transfer/fees/done/payment-done.component';
import { FeesPaymentDoneRoutes } from 'app/modules/citizens/property/application/transfer/fees/done/payment-done.routing';

@NgModule({
    declarations: [
        FeesPaymentDoneComponent
    ],
    imports     : [
        RouterModule.forChild(FeesPaymentDoneRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class CitizensFeesPaymentDoneModule
{
}