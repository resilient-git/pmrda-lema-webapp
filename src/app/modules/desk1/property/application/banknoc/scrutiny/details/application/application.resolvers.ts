import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNoCApplicationService } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/application/application.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNoCApplicationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNoCApplicationService: ViewBankNoCApplicationService)
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
        return this._viewBankNoCApplicationService.getData();
    }
}
