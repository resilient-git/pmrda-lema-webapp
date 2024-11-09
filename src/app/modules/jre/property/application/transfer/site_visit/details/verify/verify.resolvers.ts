import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyTransferVerifyService } from 'app/modules/jre/property/application/transfer/pending/details/verify/verify.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyTransferVerifyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyTransferVerifyService: ViewPropertyTransferVerifyService)
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
        return this._viewPropertyTransferVerifyService.getData();
    }
}