import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CalculationService } from 'app/modules/jre/property/application/transfer/calculation/calculation.service';

@Injectable({
    providedIn: 'root'
})
export class CalculationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _calculationService: CalculationService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._calculationService.getData();
    }
}
