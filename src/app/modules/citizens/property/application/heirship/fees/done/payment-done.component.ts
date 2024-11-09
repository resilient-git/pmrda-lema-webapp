import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { FeesPaymentDoneService } from "app/modules/citizens/property/application/heirship/fees/done/payment-done.service";
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
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
    )
    {
    }
   
    ngOnInit(): void
    {
        if(2 !== (JSON.parse(localStorage.getItem('currentUser')).role_id)){this._router.navigateByUrl('/restricted-access');}
        this._activatedRoute.params.subscribe(params => {
            //console.log(params) //log the entire params object
            this.application_code=params['code'];
          });
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
import { FeesPaymentDoneService } from 'app/modules/citizens/payment/fees/done/payment-done.service';

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
        if(2 !== (JSON.parse(localStorage.getItem('currentUser')).role_id)){this._router.navigateByUrl('/restricted-access');}
       
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}*/