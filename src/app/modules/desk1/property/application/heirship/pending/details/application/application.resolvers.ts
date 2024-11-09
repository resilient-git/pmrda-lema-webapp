import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewHeirshipTransferApplicationService } from './application.service';

@Injectable({
    providedIn: 'root'
})
export class ViewHeirshipTransferApplicationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewHeirshipTransferApplicationService: ViewHeirshipTransferApplicationService)
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
        return this._viewHeirshipTransferApplicationService.getData();
    }
}
