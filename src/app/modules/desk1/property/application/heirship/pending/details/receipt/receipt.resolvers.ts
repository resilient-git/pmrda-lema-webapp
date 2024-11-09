import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewHeirshipTransferReceiptService } from './receipt.service';

@Injectable({
    providedIn: 'root'
})
export class ViewHeirshipTransferReceiptResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewHeirshipTransferReceiptService: ViewHeirshipTransferReceiptService)
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
        return this._viewHeirshipTransferReceiptService.getData();
    }
}
