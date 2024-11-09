import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewBankNocTransferDocumentService } from 'app/modules/desk4/property/application/banknoc/verification/details/document/document.service';

@Injectable({
    providedIn: 'root'
})
export class ViewBankNocTransferDocumentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewBankNocTransferDocumentService: ViewBankNocTransferDocumentService)
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
        return this._viewBankNocTransferDocumentService.getData();
    }
}
