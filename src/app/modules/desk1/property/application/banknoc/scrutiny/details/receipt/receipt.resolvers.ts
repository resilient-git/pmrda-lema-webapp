import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNoCReceiptService } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/receipt/receipt.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNoCReceiptResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNoCReceiptService: ViewBankNoCReceiptService)
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
        return this._viewBankNoCReceiptService.getData();
    }
}
