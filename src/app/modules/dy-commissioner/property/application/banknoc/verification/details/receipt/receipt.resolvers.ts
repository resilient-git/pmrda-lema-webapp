import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNocTransferReceiptService } from 'app/modules/dy-commissioner/property/application/banknoc/verification/details/receipt/receipt.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNocTransferReceiptResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNocTransferReceiptService: ViewBankNocTransferReceiptService)
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
        return this._viewBankNocTransferReceiptService.getData();
    }
}
