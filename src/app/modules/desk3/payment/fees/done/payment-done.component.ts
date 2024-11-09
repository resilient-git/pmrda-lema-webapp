import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FeesPaymentDoneService } from "app/modules/desk3/payment/fees/done/payment-done.service";
import { Subject } from "rxjs";

@Component({
    selector       : 'payment-done',
    templateUrl    : './payment-done.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeesPaymentDoneComponent implements OnInit, OnDestroy
{

    feesForm: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public application_code:number=0;

    constructor(
        private _transferFeesPaymentDoneService: FeesPaymentDoneService,
        private _router: Router,
        private _formBuilder: FormBuilder
    )
    {
    }
   
    ngOnInit(): void
    {
       this.application_code=1;
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
   
}

/*import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FeesPaymentDoneService } from 'app/modules/desk3/payment/fees/done/payment-done.service';

@Component({
    selector       : 'payment-done',
    templateUrl    : './payment-done.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeesPaymentDoneComponent implements OnInit, OnDestroy
{

    feesForm: FormGroup;

    constructor(
        private _paymentDoneService: FeesPaymentDoneService,
        private _router: Router,
        private _formBuilder: FormBuilder
    )
    {
    }
   
    ngOnInit(): void
    {
       
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}*/