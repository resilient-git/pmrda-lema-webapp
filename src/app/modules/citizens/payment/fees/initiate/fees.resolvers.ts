import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {FeesService } from 'app/modules/citizens/payment/fees/initiate/fees.service';


@Injectable({
    providedIn: 'root'
})
export class FeesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _feesService: FeesService)
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
        return this._feesService.getData();
    }

    
}
