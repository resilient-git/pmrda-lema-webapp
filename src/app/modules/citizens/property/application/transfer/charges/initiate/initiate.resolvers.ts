import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {InitiateService } from 'app/modules/citizens/property/application/transfer/charges/initiate/initiate.service';


@Injectable({
    providedIn: 'root'
})
export class InitiateResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _initiateService: InitiateService)
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
        return this._initiateService.getData();
    }

    
}
