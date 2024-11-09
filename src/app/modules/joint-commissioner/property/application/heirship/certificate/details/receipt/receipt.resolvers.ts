import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyHeirshipReceiptService } from 'app/modules/joint-commissioner/property/application/heirship/certificate/details/receipt/receipt.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyHeirshipReceiptResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyHeirshipReceiptService: ViewPropertyHeirshipReceiptService)
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
        return this._viewPropertyHeirshipReceiptService.getData();
    }
}
