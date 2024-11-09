import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {ChargesPaymentDoneService } from 'app/modules/citizens/property/application/transfer/charges/done/payment-done.service';


@Injectable({
    providedIn: 'root'
})
export class ChargesPaymentDoneResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _paymentDoneService: ChargesPaymentDoneService)
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
