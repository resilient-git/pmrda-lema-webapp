import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {FeesPaymentDoneService } from 'app/modules/desk5/payment/fees/done/payment-done.service';


@Injectable({
    providedIn: 'root'
})
export class FeesPaymentDoneResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _paymentDoneService: FeesPaymentDoneService)
    {
    }


    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
   

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._paymentDoneService.getData();
    }

    
}
