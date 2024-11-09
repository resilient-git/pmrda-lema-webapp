import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyTransferApplicationService } from 'app/modules/desk1/property/application/transfer/scrutiny/details/application/application.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyTransferApplicationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyTransferApplicationService: ViewPropertyTransferApplicationService)
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
        return this._viewPropertyTransferApplicationService.getData();
    }
}
