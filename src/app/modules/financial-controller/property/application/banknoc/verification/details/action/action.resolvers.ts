import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNocTransferActionService } from 'app/modules/financial-controller/property/application/banknoc/verification/details/action/action.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNocTransferActionResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNocTransferActionService: ViewBankNocTransferActionService)
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
        return this._viewBankNocTransferActionService.getData();
    }
}
