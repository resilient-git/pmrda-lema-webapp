import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNocActionService } from './action.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNocActionResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNocActionService: ViewBankNocActionService)
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
        return this._viewBankNocActionService.getData();
    }
}
