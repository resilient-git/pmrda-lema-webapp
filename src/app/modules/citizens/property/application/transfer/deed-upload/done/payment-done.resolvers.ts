import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {DeedPrintingPaymentDoneService } from 'app/modules/desk1/property/application/transfer/deed_printingdone/payment-done.service';


@Injectable({
    providedIn: 'root'
})
export class DeedPrintingPaymentDoneResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _paymentDoneService: DeedPrintingPaymentDoneService)
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
