import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNoCActionService } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/action/action.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNoCActionResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNoCActionService: ViewBankNoCActionService)
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
        return this._viewBankNoCActionService.getData();
    }
}
