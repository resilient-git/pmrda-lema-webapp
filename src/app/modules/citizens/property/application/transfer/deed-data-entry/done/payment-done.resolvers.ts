import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {DeedDataEntryPaymentDoneService } from 'app/modules/citizens/property/application/transfer/deed-data-entrydone/payment-done.service';


@Injectable({
    providedIn: 'root'
})
export class DeedDataEntryPaymentDoneResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _paymentDoneService: DeedDataEntryPaymentDoneService)
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
